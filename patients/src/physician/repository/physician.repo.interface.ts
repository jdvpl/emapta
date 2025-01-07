import { Injectable } from '@nestjs/common';
import { CreatePhysicianDto } from '../dto/create-physician.dto';

@Injectable()
export abstract class PhysicianRepoInterface {
  abstract createPhysician(data: CreatePhysicianDto);
}
