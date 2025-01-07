import { Module } from '@nestjs/common';
import { NatsModule } from './shared/transports/nats.module';
import { PatientModule } from './patient/patient.module';
import { RabbitMQModule } from './shared/transports/rabbitmq.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NatsModule, PatientModule, RabbitMQModule, AuthModule],
})
export class AppModule { }
