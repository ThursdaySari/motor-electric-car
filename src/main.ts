import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '10mb' }));
  app.enableCors();
  const port = process.env.PORT || process.env.SERVER_PORT || 3000;
  await app.listen(port);
}
bootstrap();
