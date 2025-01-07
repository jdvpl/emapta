import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Post,
  Headers,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/common';
import { CreatePhysicianDto } from './dto/create-physician.dto';
import { catchError } from 'rxjs';

@Controller('physician')
export class PhysicianController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) { }
  @Post()
  createPhysician(
    @Body() body: CreatePhysicianDto,
    @Headers('authorization') authorization: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new RpcException({
        message: 'Authorization token is missing or invalid',
        status: HttpStatus.FORBIDDEN,
      });
    }

    const token = authorization.split(' ')[1];
    body.token = token;
    const bodytoSend: any = { ...body };
    const dob = new Date(body.dob);

    bodytoSend.dob = dob;
    return this.natsClient.send('createPhysician', bodytoSend).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }
}
