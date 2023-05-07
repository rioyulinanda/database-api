import { Injectable } from '@nestjs/common';
import { ShoplistRepository } from './shoplist.repository';
import { CreateShoplistDto } from './dtos/create-shoplist.dto';
import { UpdateShoplistDto } from './dtos/update-shoplist.dto';

@Injectable()
export class ShoplistService {
  constructor(private shoplistRepo: ShoplistRepository) {}

  async post(createShoplistDto: CreateShoplistDto, usersId?: number) {
    return this.shoplistRepo.post(createShoplistDto, usersId);
  }

  async get() {
    return this.shoplistRepo.get();
  }

  async findOne(id: number) {
    return this.shoplistRepo.findOne(id);
  }

  async delete(id: number) {
    return this.shoplistRepo.delete(id);
  }

  async put(id: number, updateShoplistDto: UpdateShoplistDto, usersId: number) {
    return this.shoplistRepo.put(id, updateShoplistDto, usersId);
  }

  async patch(
    id: number,
    updateShoplistDto: UpdateShoplistDto,
    usersId: number,
  ) {
    return this.shoplistRepo.updatePartialShoplist(
      id,
      updateShoplistDto,
      usersId,
    );
  }
}
