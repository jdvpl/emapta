import { Module } from '@nestjs/common';
import { NatsModule } from './shared/transports/nats.module';
import { PatientModule } from './patient/patient.module';
import { RabbitMQModule } from './shared/transports/rabbitmq.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [NatsModule, PatientModule, RabbitMQModule],
  providers: [PrismaService],
})
export class AppModule { }
