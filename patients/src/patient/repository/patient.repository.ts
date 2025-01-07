import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PatientRepoInterface } from './patient.repo.interface';
import { RpcException } from '@nestjs/microservices';
import { CreatePatientDto } from '../dto/create-patient.dto';

@Injectable()
export class PatientRepository implements PatientRepoInterface {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreatePatientDto) {
    try {
      return this.prisma.patient.create({
        data,
      });
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async findById(id: number) {
    return this.prisma.patient.findUnique({
      where: { id },
      include: {
        emergencyContacts: true,
        insurance: true,
        medicalHistories: true,
        allergies: true,
        medications: true,
        socialHistory: true,
      },
    });
  }

  async findAll() {
    return this.prisma.patient.findMany({
      include: {
        emergencyContacts: true,
        insurance: true,
        medicalHistories: true,
        allergies: true,
        medications: true,
        socialHistory: true,
      },
    });
  }
}
