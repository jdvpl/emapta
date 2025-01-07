import { Module } from '@nestjs/common';

import { PatientController } from './patient.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PatientRepoInterface } from './repository/patient.repo.interface';
import { PatientRepository } from './repository/patient.repository';
import { PatientInterface } from './use-case/patient.interface';
import { PatientImplementation } from './use-case/patient.implementation';

@Module({
  controllers: [PatientController],
  imports: [PrismaModule],
  providers: [
    {
      useClass: PatientImplementation,
      provide: PatientInterface,
    },

    {
      provide: PatientRepoInterface,
      useClass: PatientRepository,
    },
  ],
})
export class PatientModule { }
