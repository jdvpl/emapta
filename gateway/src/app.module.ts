import { Module } from '@nestjs/common';
import { NatsModule } from './common';
import { PatientsModule } from './patients/patients.module';
import { AuthModule } from './auth/auth.module';
import { PhysicianModule } from './physician/physician.module';

@Module({
  imports: [PatientsModule, NatsModule, AuthModule, PhysicianModule],
})
export class AppModule {}
