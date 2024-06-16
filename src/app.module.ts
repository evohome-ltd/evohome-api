import { AuthModule } from '@app/auth/auth.module';
import { ConfigModule } from '@app/config/config.module';
import { DatabaseModule } from '@app/database/database.module';
import { UsersModule } from '@app/users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule, ConfigModule, DatabaseModule, UsersModule],
})
export class AppModule {}
