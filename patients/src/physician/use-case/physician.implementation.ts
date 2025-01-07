import { HttpStatus, Injectable } from '@nestjs/common';
import { PhysicianInterface } from './physician.interface';

import * as jwt from 'jsonwebtoken';
import { envs } from 'src/common';
import { RpcException } from '@nestjs/microservices';
import { CreatePhysicianDto } from '../dto/create-physician.dto';
import { PhysicianRepoInterface } from '../repository/physician.repo.interface';

@Injectable()
export class PhysicianImplementation implements PhysicianInterface {
  constructor(private readonly physicianReporsitory: PhysicianRepoInterface) { }

  async createPhysician(data: CreatePhysicianDto) {
    try {
      const tokenjwt = data.token;
      data.dob = new Date(data.dob);
      const { id } = jwt.verify(tokenjwt, envs.JWT_SECRET);
      const { token, ...restBody } = data

      console.log({ data, id });
      const physician = await this.physicianReporsitory.createPhysician({
        ...restBody,
        adminId: id,
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
