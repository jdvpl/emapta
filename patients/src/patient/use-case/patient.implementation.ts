import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { PatientInterface } from './patient.interface';
import { PatientRepoInterface } from '../repository/patient.repo.interface';

@Injectable()
export class PatientImplementation implements PatientInterface {
  constructor(private readonly patientRepository: PatientRepoInterface) { }

  async createPatient(createPatientDto: CreatePatientDto) {
    console.log('object', createPatientDto);
    createPatientDto.dob = new Date(createPatientDto.dob);
    const patient = await this.patientRepository.create(createPatientDto);
    return patient;
  }

  async getPatient(id: number) {
    const patient = await this.patientRepository.findById(id);
    return patient;
  }
  async getAllPatients() {
    const patients = await this.patientRepository.findAll();
    return patients;
  }
}
