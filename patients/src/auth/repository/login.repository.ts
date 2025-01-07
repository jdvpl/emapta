import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRepoInterface } from './login.repo.interface';
import { RpcException } from '@nestjs/microservices';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LoginRepository implements LoginRepoInterface {
  constructor(private readonly prisma: PrismaService) { }

  async login(data: LoginDto) {
    try {
      const admin = await this.prisma.admin.findUnique({
        where: {
          email: data.email,
          password: data.password,
        },
      });
      if (!admin) {
        throw new RpcException({
          message: 'Invalid credentials',
          status: HttpStatus.UNAUTHORIZED,
        });
      }
      return admin;
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
