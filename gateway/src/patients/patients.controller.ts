import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/common';

@Controller('patients')
export class PatientsController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) { }

  @Post()
  createPatient(@Body() body) {
    console.log(body);
    return this.natsClient.send('createPatient', body).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }
  @Get()
  getPatients() {
    return this.natsClient.send('findAllPatient', {});
  }
}
