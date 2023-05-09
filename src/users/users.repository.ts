import { PrismaClient } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async post(data: any) {
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

  async get() {
    return await this.prisma.user.findMany();
  }
}