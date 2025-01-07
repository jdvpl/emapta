import { Module } from '@nestjs/common';
import { NatsModule } from './common';
import { PatientsModule } from './patients/patients.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PatientsModule, NatsModule, AuthModule],
})
export class AppModule {}
