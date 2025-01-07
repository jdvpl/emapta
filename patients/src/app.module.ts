import { Module } from '@nestjs/common';
import { NatsModule } from './shared/transports/nats.module';
import { PatientModule } from './patient/patient.module';
import { RabbitMQModule } from './shared/rabbitmq/rabbitmq.module';
import { AuthModule } from './auth/auth.module';
import { PhysicianModule } from './physician/physician.module';

@Module({
  imports: [
    NatsModule,
    PatientModule,
    RabbitMQModule,
    AuthModule,
    PhysicianModule,
  ],
})
export class AppModule { }
