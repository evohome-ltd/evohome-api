import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/config/config.module';
import { DatabaseModule } from '@app/database/database.module';
import { UsersModule } from '@app/users/users.module';
import { AuthModule } from '@app/auth/auth.module';

@Module({
  imports: [AuthModule, ConfigModule, DatabaseModule, UsersModule],
})
export class AppModule {}
