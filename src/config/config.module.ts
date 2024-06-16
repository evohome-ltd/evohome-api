import { ConfigService } from '@app/config/config.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
