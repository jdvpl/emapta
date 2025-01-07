/*
  Warnings:

  - You are about to drop the column `address` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Patient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[PATIENT_EMAIL_ID]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `DATE_OF_BIRTH_PATIENT` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GENDER_OF_PATIENT` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HISTORY_FAMILY_PATIENT` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PATIENT_EMAIL_ID` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PATIENT_IDENT_NAME` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PATIENT_LOCATION_ADDRESS` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PRIMARY_CARE_DOCTOR_PATIENT` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TELEPHONE_NUMBER_PATIENT` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Allergy" DROP CONSTRAINT "Allergy_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Insurance" DROP CONSTRAINT "Insurance_patientId_fkey";

-- DropForeignKey
ALTER TABLE "MedicalHistory" DROP CONSTRAINT "MedicalHistory_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Medication" DROP CONSTRAINT "Medication_patientId_fkey";

-- DropForeignKey
ALTER TABLE "SocialHistory" DROP CONSTRAINT "SocialHistory_patientId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "address",
DROP COLUMN "dob",
DROP COLUMN "email",
DROP COLUMN "gender",
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "DATE_OF_BIRTH_PATIENT" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "GENDER_OF_PATIENT" TEXT NOT NULL,
ADD COLUMN     "HISTORY_FAMILY_PATIENT" TEXT NOT NULL,
ADD COLUMN     "PATIENT_EMAIL_ID" TEXT NOT NULL,
ADD COLUMN     "PATIENT_IDENT_NAME" TEXT NOT NULL,
ADD COLUMN     "PATIENT_LOCATION_ADDRESS" TEXT NOT NULL,
ADD COLUMN     "PRIMARY_CARE_DOCTOR_PATIENT" TEXT NOT NULL,
ADD COLUMN     "TELEPHONE_NUMBER_PATIENT" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Allergy_allergyName_idx" ON "Allergy"("allergyName");

-- CreateIndex
CREATE INDEX "Appointment_date_idx" ON "Appointment"("date");

-- CreateIndex
CREATE INDEX "Contact_phoneNumber_idx" ON "Contact"("phoneNumber");

-- CreateIndex
CREATE INDEX "Insurance_policyNumber_idx" ON "Insurance"("policyNumber");

-- CreateIndex
CREATE INDEX "MedicalHistory_diagnosisDate_idx" ON "MedicalHistory"("diagnosisDate");

-- CreateIndex
CREATE INDEX "Medication_medicationName_idx" ON "Medication"("medicationName");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_PATIENT_EMAIL_ID_key" ON "Patient"("PATIENT_EMAIL_ID");

-- CreateIndex
CREATE INDEX "Patient_PATIENT_IDENT_NAME_idx" ON "Patient"("PATIENT_IDENT_NAME");

-- CreateIndex
CREATE INDEX "Patient_TELEPHONE_NUMBER_PATIENT_idx" ON "Patient"("TELEPHONE_NUMBER_PATIENT");

-- CreateIndex
CREATE INDEX "SocialHistory_history_idx" ON "SocialHistory"("history");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialHistory" ADD CONSTRAINT "SocialHistory_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
