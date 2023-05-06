import { Module } from '@nestjs/common';
import { ShoplistController } from './shoplist.controller';
import { ShoplistService } from './shoplist.service';
import { ShoplistRepository } from './shoplist.repository';
// import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [ShoplistController],
  providers: [ShoplistService, ShoplistRepository, PrismaService],
  imports: [UsersModule],
})
export class ShoplistModule {}
