import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/common';

@Controller()
export class PatientsController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) {}
}
