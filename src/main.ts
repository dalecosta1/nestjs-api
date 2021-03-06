import { NestFactory } from '@nestjs/core';
import { AppModule } from './cats.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
