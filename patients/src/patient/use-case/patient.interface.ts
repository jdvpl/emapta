import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PatientInterface {
  abstract createPatient(data: any): Promise<any>;
  abstract getPatient(id: number): Promise<any>;
  abstract getAllPatients(): Promise<any>;
}
