import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreatePatientDto) {
    const prismaData: Prisma.PatientCreateInput = {
      ...data,
      emergencyContacts: data.emergencyContacts
        ? {
          create: data.emergencyContacts,
        }
        : undefined,
      insurance: data.insurance
        ? {
          create: data.insurance,
        }
        : undefined,
      medicalHistories: data.medicalHistories
        ? {
          create: data.medicalHistories,
        }
        : undefined,
      allergies: data.allergies
        ? {
          create: data.allergies,
        }
        : undefined,
      medications: data.medications
        ? {
          create: data.medications,
        }
        : undefined,
      socialHistory: data.socialHistory
        ? {
          create: data.socialHistory,
        }
        : undefined,
    };

    return this.prisma.patient.create({
      data: prismaData,
    });
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
