import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PatientRepoInterface {
  abstract findById(id: number): Promise<any>;
  abstract findAll(): Promise<any>;
  abstract create(data: any): Promise<any>;
}
