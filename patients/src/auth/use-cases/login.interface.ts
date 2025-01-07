import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export abstract class LoginInterface {
  abstract login(data: LoginDto);
}
