import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ShoplistModule } from './shoplist.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ShoplistModule, AuthenticationModule, AuthModule],
})
export class AppModule {}
