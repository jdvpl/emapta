import {
  IsString,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Gender } from '@prisma/client';
import { Role } from '@prisma/client';

export class CreatePhysicianDto {
  @IsString()
  name: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDate()
  dob: Date;

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
