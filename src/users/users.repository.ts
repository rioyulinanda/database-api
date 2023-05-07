import { PrismaClient } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: any) {
    const newUser = await this.prisma.user.create({ data });
    return newUser;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: +id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  async update(id: number, data: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: +id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    const updatedUser = await this.prisma.user.update({
      where: { id: +id },
      data: {
        ...data,
      },
    });
    return updatedUser;
  }
}
