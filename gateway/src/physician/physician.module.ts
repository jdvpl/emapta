import { Module } from '@nestjs/common';
import { PhysicianController } from './physician.controller';
import { NatsModule } from 'src/common';

@Module({
  controllers: [PhysicianController],
  imports: [NatsModule],
})
export class PhysicianModule { }
