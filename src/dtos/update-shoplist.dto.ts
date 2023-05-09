import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class UpdateShoplistDto {
  @IsOptional()
  @IsString({ each: true })
  items?: string[];

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDateString()
  createdAt?: Date;

  @IsOptional()
  @IsNumber()
  usersId?: number;
}
