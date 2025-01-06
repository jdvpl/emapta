import { Module } from '@nestjs/common';
import { NatsModule } from './common';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [PatientsModule, NatsModule],
})
export class AppModule {}
