export class Patient {
  id: number;
  name: string;
  gender: string;
  dob: Date;
  address: string;
  phone: string;
  email: string;
  emergencyContacts: any[];
  insurance: any[];
  medicalHistories: any[];
  allergies: any[];
  medications: any[];
  socialHistory: any[];
  familyHistory: string;
  primaryCarePhysician: string;
  createdAt: Date;
  updatedAt: Date;
}
