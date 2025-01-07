import { Module } from '@nestjs/common';

import { PhysicianController } from './physician.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PhysicianRepository } from './repository/physician.repository';
import { PhysicianRepoInterface } from './repository/physician.repo.interface';
import { PhysicianInterface } from './use-case/physician.interface';
import { PhysicianImplementation } from './use-case/physician.implementation';

@Module({
  controllers: [PhysicianController],
  imports: [PrismaModule],
  providers: [
    {
      provide: PhysicianRepoInterface,
      useClass: PhysicianRepository,
    },
    {
      provide: PhysicianInterface,
      useClass: PhysicianImplementation,
    },
  ],
})
export class PhysicianModule { }
