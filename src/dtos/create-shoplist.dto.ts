import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateShoplistDto {
  @IsString({ each: true })
  items: string[];

  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  usersId?: number;

  @IsNotEmpty()
  @IsDateString()
  createdAt: Date;
}
