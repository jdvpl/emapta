import { HttpStatus, Injectable } from '@nestjs/common';
import { PhysicianInterface } from './physician.interface';

import * as jwt from 'jsonwebtoken';
import { envs } from 'src/common';
import { RpcException } from '@nestjs/microservices';
import { CreatePhysicianDto } from '../dto/create-physician.dto';

@Injectable()
export class PhysicianImplementation implements PhysicianInterface {
  constructor(private readonly physicianReporsitory: PhysicianInterface) { }

  async createPhysician(data: CreatePhysicianDto) {
    try {
      const token = data.token;
      const { id } = jwt.verify(token, envs.JWT_SECRET);
      const physician = await this.physicianReporsitory.createPhysician({
        ...data,
        userId: id,
      });
      return { physician };
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
