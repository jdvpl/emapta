import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/common';
import { catchError } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) { }
  @Post()
  createPatient(@Body() body: LoginDto) {
    return this.natsClient.send('login', body).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }
}
