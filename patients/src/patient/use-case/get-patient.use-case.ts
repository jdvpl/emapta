import { Injectable } from '@nestjs/common';
import { PatientRepository } from '../repository/patient.repository';

@Injectable()
export class GetPatientUseCase {
  constructor(private readonly patientRepository: PatientRepository) { }

  async execute(id: number) {
    const patient = await this.patientRepository.findById(id);
    return patient;
  }
}
