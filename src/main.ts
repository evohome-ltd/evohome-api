import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  const logger: Logger = new Logger(bootstrap.name);
  const config: ConfigService = app.get(ConfigService);

  await app.listen(config.port, async () => {
    logger.log(`EvoHome API running on http://127.0.0.1:${config.port}`);
  });
}

(async () => {
  await bootstrap();
})();
