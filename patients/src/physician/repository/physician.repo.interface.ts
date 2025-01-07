import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PhysicianRepoInterface {
  abstract createPhysician(data);
}
