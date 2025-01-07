import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { LoginRepository } from './repository/login.repository';
import { LoginRepoInterface } from './repository/login.repo.interface';
import { LoginInterface } from './use-cases/login.interface';
import { LoginImplementation } from './use-cases/login.implementation';

@Module({
  controllers: [AuthController],
  imports: [PrismaModule],
  providers: [
    {
      useClass: LoginRepository,
      provide: LoginRepoInterface,
    },

    {
      provide: LoginInterface,
      useClass: LoginImplementation,
    },
  ],
})
export class AuthModule { }
