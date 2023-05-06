import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShoplistDto } from './dtos/create-shoplist.dto';
import { UpdateShoplistDto } from './dtos/update-shoplist.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShoplistRepository {
  constructor(private prisma: PrismaService) {}

  async get() {
    return await this.prisma.shoplist.findMany();
  }

  async findOne(id: number) {
    const shoplist = await this.prisma.shoplist.findUnique({
      where: { id: +id },
      include: {
        users: true,
      },
    });
    if (!shoplist) {
      throw new NotFoundException(`Item with ID ${id} not found.`);
    }
    return shoplist;
  }

  async post(data) {
    const { items, name } = data;
    const newShoplist = await this.prisma.shoplist.create({
      data: {
        items,
        name,
      },
    });
    return newShoplist;
  }
}

//   async delete(id: number) {}

//   async put(id: number, createShoplistDto: CreateShoplistDto) {}

//   async updatePartialShoplist(
//     id: number,
//     updateShoplistDto: UpdateShoplistDto,
//   ) {}
