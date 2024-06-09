import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  const logger: Logger = new Logger(bootstrap.name);

  await app.listen(3000, '127.0.0.1', async () => {
    logger.log(`EvoHome API running on ${await app.getUrl()}`);
  });
}

(async () => {
  await bootstrap();
})();
