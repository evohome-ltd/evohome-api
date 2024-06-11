import { Module } from '@nestjs/common';
import { ConfigService } from '@app/config/config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
