import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePhysicianDto } from './dto/create-physician.dto';
import { PhysicianInterface } from './use-case/physician.interface';

@Controller()
export class PhysicianController {
  constructor(private readonly physicianImp: PhysicianInterface) { }

  @MessagePattern('createPhysician')
  login(@Payload() loginDto) {
    console.log(loginDto);
    return this.physicianImp.createPhysician(loginDto);
  }
}
