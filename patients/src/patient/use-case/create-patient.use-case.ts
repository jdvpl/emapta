import { Injectable } from '@nestjs/common';
import { PatientRepository } from '../repository/patient.repository';
import { CreatePatientDto } from '../dto/create-patient.dto';

@Injectable()
export class CreatePatientUseCase {
  constructor(private readonly patientRepository: PatientRepository) { }

  async execute(createPatientDto: CreatePatientDto) {
    const patient = await this.patientRepository.create(createPatientDto);
    return patient;
  }
}
