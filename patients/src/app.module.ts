import { Module } from '@nestjs/common';
import { NatsModule } from './shared/transports/nats.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [NatsModule, PatientModule],
})
export class AppModule {}
