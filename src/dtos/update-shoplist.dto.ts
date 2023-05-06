import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateShoplistDto {
  @IsNumber()
  @IsOptional()
  usersId: number;

  @IsString()
  @IsOptional()
  items: string;

  @IsString()
  @IsOptional()
  name: string;
}
