import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientInterface } from './use-case/patient.interface';

@Controller()
export class PatientController {
  constructor(private readonly patientImplementation: PatientInterface) { }

  @MessagePattern('createPatient')
  create(@Payload() createPatientDto: any) {
    return this.patientImplementation.createPatient(createPatientDto);
  }

  @MessagePattern('findAllPatient')
  findAll() {
    console.log('entrooo');
    return this.patientImplementation.getAllPatients();
  }

  @MessagePattern('findOnePatient')
  findOne(@Payload() id: number) {
    return this.patientImplementation.getPatient(id);
  }
}
