import {
  IsString,
  IsEmail,
  IsEnum,
  IsDateString,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';

export enum Role {
  Doctor = 'Doctor',
  Nurse = 'Nurse',
  Admin = 'Admin',
}

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

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
