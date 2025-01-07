import {
  IsString,
  IsDateString,
  IsEmail,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsDateString()
  dob: Date;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsArray()
  @IsOptional()
  emergencyContacts?: any[];

  @IsArray()
  @IsOptional()
  insurance?: any[];

  @IsArray()
  @IsOptional()
  medicalHistories?: any[];

  @IsArray()
  @IsOptional()
  allergies?: any[];

  @IsArray()
  @IsOptional()
  medications?: any[];

  @IsArray()
  @IsOptional()
  socialHistory?: any[];

  @IsString()
  @IsOptional()
  familyHistory?: string;

  @IsString()
  @IsOptional()
  primaryCarePhysician?: string;
}
