import { Injectable, NotFoundException } from '@nestjs/common';
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
        user: true,
      },
    });
    if (!shoplist) {
      throw new NotFoundException(`Item with ID ${id} not found.`);
    }
    return shoplist;
  }

  async post(data) {
    const { items, name, usersId } = data;
    console.log(data);
    if (!usersId) {
      throw new Error('User ID is required.');
    }
    const newShoplist = await this.prisma.shoplist.create({
      data: {
        items,
        name,
        usersId,
      },
    });
    return newShoplist;
  }

  async delete(id: number) {
    const shoplist = await this.prisma.shoplist.findUnique({
      where: { id: +id },
    });
    if (!shoplist) {
      throw new NotFoundException(`Item with ID ${id} not found.`);
    }
    await this.prisma.shoplist.delete({
      where: { id: +id },
    });
    return shoplist;
  }

  async put(id: number, data: any, userId: number) {
    const updatedShoplist = await this.prisma.shoplist.update({
      where: { id: id },
      data: {
        ...data,
        usersId: userId,
      },
    });
    return updatedShoplist;
  }

  async updatePartialShoplist(id: number, data: any, userId: number) {
    const updatedShoplist = await this.prisma.shoplist.update({
      where: { id: id },
      data: {
        ...data,
        usersId: userId,
      },
    });
    return updatedShoplist;
  }
}
