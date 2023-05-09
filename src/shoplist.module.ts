import { Module } from '@nestjs/common';
import { ShoplistController } from './shoplist.controller';
import { ShoplistService } from './shoplist.service';
import { ShoplistRepository } from './shoplist.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [ShoplistController],
  providers: [ShoplistService, ShoplistRepository, PrismaService],
})
export class ShoplistModule {}
