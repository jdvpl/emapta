import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { NatsModule } from '../common';

@Module({
  controllers: [PatientsController],
  imports: [NatsModule],
})
export class PatientsModule {}
