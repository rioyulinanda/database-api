import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepository) {}

  async post(createUserDto: CreateUserDto) {
    return this.usersRepo.post(createUserDto);
  }

  async get() {
    return this.usersRepo.get();
  }

  async findOne(email: string): Promise<User | null> {
    return this.usersRepo.findOne(email);
  }
}
