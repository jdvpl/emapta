import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PhysicianInterface {
  abstract createPhysician(data);
}
