import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientService } from './services/patient.service';

@Controller()
export class PatientController {
  constructor(private readonly patientService: PatientService) { }

  @MessagePattern('createPatient')
  create(@Payload() createPatientDto: CreatePatientDto) {
    return this.patientService.createPatient(createPatientDto);
  }

  @MessagePattern('findAllPatient')
  findAll() {
    return this.patientService.getAllPatients();
  }

  @MessagePattern('findOnePatient')
  findOne(@Payload() id: number) {
    return this.patientService.getPatient(id);
  }
}
