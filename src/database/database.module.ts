import { ConfigModule } from '@app/config/config.module';
import { ConfigService } from '@app/config/config.service';
import { AccountModel, UserModel } from '@app/database/models';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.databaseOptions,
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([AccountModel, UserModel]),
  ],
})
export class DatabaseModule {}
