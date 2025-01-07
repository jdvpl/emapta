import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/common';

@Controller('patients')
export class PatientsController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) { }

  @Post()
  createPatient(@Body() body) {
    console.log(body);
    return this.natsClient.send('createPatient', body);
  }
  @Get()
  getPatients() {
    return this.natsClient.send('findAllPatient', {});
  }
}
