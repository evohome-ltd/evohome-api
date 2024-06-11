import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@app/config/config.module';
import { ConfigService } from '@app/config/config.service';
import { UserModel } from '@app/database/models';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.databaseOptions,
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([UserModel]),
  ],
})
export class DatabaseModule {}
