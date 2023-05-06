import { NestFactory } from '@nestjs/core';
import { ShoplistModule } from './shoplist.module';

async function bootstrap() {
  const app = await NestFactory.create(ShoplistModule);
  await app.listen(3000);
}
bootstrap();
