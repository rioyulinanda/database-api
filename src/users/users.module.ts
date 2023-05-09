import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { PrismaService } from '../prisma.service';
import { ShoplistModule } from '../shoplist.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PrismaService],
  imports: [ShoplistModule],
})
export class UsersModule {}
