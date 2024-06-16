import { ConfigModule } from '@app/config/config.module';
import { ConfigService } from '@app/config/config.service';
import { AccountModel, UserModel } from '@app/database/models';
import { Logger, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const logger: Logger = new Logger(SequelizeModule.name);

        return {
          ...config.databaseOptions,
          autoLoadModels: true,
          define: {
            underscored: true,
          },
          logging: (query) => {
            logger.debug(query);
          },
        };
      },
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([AccountModel, UserModel]),
  ],
})
export class DatabaseModule {}
