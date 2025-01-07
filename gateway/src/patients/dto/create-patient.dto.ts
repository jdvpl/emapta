import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsDate,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsDate()
  dob: Date;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  emergencyContact: string;

  @IsString()
  @IsNotEmpty()
  insuranceProvider: string;

  @IsString()
  @IsNotEmpty()
  insurancePolicyNumber: string;

  @IsString()
  @IsOptional()
  primaryCarePhysician?: string;

  @IsArray()
  @IsOptional()
  allergies?: string[];

  @IsArray()
  @IsOptional()
  currentMedications?: string[];

  @IsArray()
  @IsOptional()
  medicalHistory?: string[];

  @IsString()
  @IsOptional()
  socialHistory?: string;

  @IsString()
  @IsOptional()
  familyHistory?: string;
}
