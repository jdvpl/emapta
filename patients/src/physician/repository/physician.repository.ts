import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { RpcException } from '@nestjs/microservices';
import { PhysicianRepoInterface } from './physician.repo.interface';

@Injectable()
export class PhysicianRepository implements PhysicianRepoInterface {
  constructor(private readonly prisma: PrismaService) { }

  async createPhysician(data: any) {
    try {
      const physician = await this.prisma.physician.create({
        data,
      });
      return physician;
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
