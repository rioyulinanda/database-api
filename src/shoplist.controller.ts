import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
  NotFoundException,
} from '@nestjs/common';
import { CreateShoplistDto } from './dtos/create-shoplist.dto';
import { UpdateShoplistDto } from './dtos/update-shoplist.dto';
import { ShoplistService } from './shoplist.service';

@Controller('shoplist')
export class ShoplistController {
  constructor(private readonly ShoplistService: ShoplistService) {}

  @Get()
  listshoplists() {
    return this.ShoplistService.get();
  }

  @Get(':id')
  async getShoplist(@Param('id') id: string) {
    const shoplistId = parseInt(id, 10);
    const shoplist = await this.ShoplistService.findOne(shoplistId);
    if (!shoplist) {
      throw new NotFoundException('shoplist not found');
    }
    return shoplist;
  }

  @Post()
  async createshoplist(@Body() CreateShoplistDto: CreateShoplistDto) {
    return this.ShoplistService.post(CreateShoplistDto);
  }

  //   @Delete(':id')
  //   async deleteshoplist(@Param('id') id: string) {
  //     const shoplistId = parseInt(id, 10);
  //     // return await this.ShoplistService.delete(shoplistId);
  //   }

  //   @Put(':id')
  //   async updateshoplist(
  //     @Param('id') id: string,
  //     @Body() UpdateShoplistDto: UpdateShoplistDto,
  //   ) {
  //     const shoplistId = parseInt(id, 10);
  //     return await this.ShoplistService.put(shoplistId, UpdateShoplistDto);
  //   }

  //   @Patch(':id')
  //   async partialUpdateshoplist(
  //     @Param('id') id: string,
  //     @Body() UpdateShoplistDto: UpdateShoplistDto,
  //   ) {
  //     const shoplistId = parseInt(id, 10);
  //     return await this.ShoplistService.patch(shoplistId, UpdateShoplistDto);
  //   }
}
