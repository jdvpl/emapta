import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginDto } from './dto/login.dto';
import { LoginInterface } from './use-cases/login.interface';

@Controller()
export class AuthController {
  constructor(private readonly authService: LoginInterface) { }

  @MessagePattern('login')
  login(@Payload() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
