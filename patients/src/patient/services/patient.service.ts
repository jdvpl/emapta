import { Injectable } from '@nestjs/common';
import { CreatePatientUseCase } from '../use-case/create-patient.use-case';
import { GetPatientUseCase } from '../use-case/get-patient.use-case';
import { CreatePatientDto } from '../dto/create-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    private readonly createPatientUseCase: CreatePatientUseCase,
    private readonly getPatientUseCase: GetPatientUseCase,
  ) { }

  async createPatient(createPatientDto: CreatePatientDto) {
    return this.createPatientUseCase.execute(createPatientDto);
  }

  async getPatient(id: number) {
    return this.getPatientUseCase.execute(id);
  }

  async getAllPatients() {
    return this.getPatientUseCase.execute(0);
  }
}
