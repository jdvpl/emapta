import {
  IsString,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { Gender } from '@prisma/client';
import { Role } from '@prisma/client';

export class CreatePhysicianDto {
  @IsString()
  name: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDateString()
  dob: string;

  @IsString()
  address: string;

  @IsPhoneNumber(null)
  phone: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  token?: string;
}
