import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ShoplistModule } from './shoplist.module';

@Module({
  imports: [UsersModule, ShoplistModule],
})
export class AppModule {}
