import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export abstract class LoginRepoInterface {
  abstract login(data: LoginDto);
}
