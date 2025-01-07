import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RABBITMQ_SERVICE } from 'src/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: RABBITMQ_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [envs.RABBITMQ_URL],
          queue: 'patients_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: RABBITMQ_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [envs.RABBITMQ_URL],
          queue: 'patients_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
})
export class RabbitMQModule { }
