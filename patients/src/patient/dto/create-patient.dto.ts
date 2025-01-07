import {
  IsString,
  IsOptional,
  IsArray,
  IsDate,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
} from 'class-validator';

// DTO para contactos de emergencia
class ContactCreateDto {
  @IsString()
  name: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  relationship: string;
}

// DTO para seguros
class InsuranceCreateDto {
  @IsString()
  provider: string;

  @IsString()
  policyNumber: string;
}

// DTO para historias médicas
class MedicalHistoryCreateDto {
  @IsString()
  history: string;

  @IsDate()
  diagnosisDate: Date;
}

// DTO para alergias
class AllergyCreateDto {
  @IsString()
  allergyName: string;

  @IsString()
  severity: string;
}

// DTO para medicamentos
class MedicationCreateDto {
  @IsString()
  medicationName: string;

  @IsString()
  dosage: string;
}

// DTO para historia social
class SocialHistoryCreateDto {
  @IsString()
  history: string;
}

// DTO principal de paciente
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
  @IsOptional() // Correo es opcional
  email?: string;

  @IsArray()
  @IsOptional() // Lista de contactos de emergencia opcional
  emergencyContacts?: ContactCreateDto[];

  @IsArray()
  @IsOptional() // Lista de seguros opcional
  insurance?: InsuranceCreateDto[];

  @IsArray()
  @IsOptional() // Lista de historias médicas opcional
  medicalHistories?: MedicalHistoryCreateDto[];

  @IsArray()
  @IsOptional() // Lista de alergias opcional
  allergies?: AllergyCreateDto[];

  @IsArray()
  @IsOptional() // Lista de medicamentos opcional
  medications?: MedicationCreateDto[];

  @IsArray()
  @IsOptional() // Lista de historia social opcional
  socialHistory?: SocialHistoryCreateDto[];

  @IsString()
  @IsNotEmpty()
  familyHistory: string;

  @IsString()
  @IsNotEmpty()
  primaryCarePhysician: string;
}
