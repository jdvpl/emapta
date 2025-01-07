import { Injectable } from '@nestjs/common';
import { LoginRepoInterface } from '../repository/login.repo.interface';
import { LoginInterface } from './login.interface';
import { LoginDto } from '../dto/login.dto';
import * as md5 from 'md5';
import * as jwt from 'jsonwebtoken';
import { envs } from 'src/common';

@Injectable()
export class LoginImplementation implements LoginInterface {
  constructor(private readonly loginReporsitory: LoginRepoInterface) { }

  async login(data: LoginDto) {
    data.password = md5(data.password);
    const admin = await this.loginReporsitory.login(data);
    const payload = { id: admin.id };
    const token = jwt.sign(payload, envs.JWT_SECRET, {
      expiresIn: '7h',
    });
    return { token };
  }
}
