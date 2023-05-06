import { IsString, IsNumber, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateShoplistDto {
  @IsString()
  items: string;

  @IsString()
  name: string;

  @IsNumber()
  usersId: number;

  @IsNotEmpty()
  @IsDateString()
  createdAt: Date;
}
