import { Injectable } from '@nestjs/common';
import { ShoplistRepository } from './shoplist.repository';
import { CreateShoplistDto } from './dtos/create-shoplist.dto';
import { UpdateShoplistDto } from './dtos/update-shoplist.dto';

@Injectable()
export class ShoplistService {
  constructor(private readonly shoplistRepo: ShoplistRepository) {}

  findOne(id: number) {
    return this.shoplistRepo.findOne(id);
  }

  get() {
    return this.shoplistRepo.get();
  }

  post(createMessageDto: CreateShoplistDto) {
    return this.shoplistRepo.post(createMessageDto);
  }

  // delete(id: number) {
  //   return this.shoplistRepo.delete(id);
  // }

  // put(id: number, updateShoplistDto: UpdateShoplistDto) {
  //   return this.shoplistRepo.put(id, updateShoplistDto);
  // }

  // patch(id: number, updateShoplistDto: UpdateShoplistDto) {
  //   return this.shoplistRepo.updatePartialShoplist(id, updateShoplistDto);
  // }
}
