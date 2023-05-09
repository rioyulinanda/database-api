import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepository) {}

  async post(createUserDto: CreateUserDto) {
    return this.usersRepo.post(createUserDto);
  }

  async get() {
    return this.usersRepo.get();
  }

  async findOne(id: number) {
    return this.usersRepo.findOne(id);
  }
}
