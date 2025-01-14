import { BadRequestException } from '@nestjs/common';
import 'dotenv/config';
import * as joi from 'joi';

interface IEnvs {
  PORT: number;
  DATABASE_URL: string;
  RABBITMQ_URL: string;
  JWT_SECRET: string;
  NATS_SERVERS: string[];
}

const envsSchema = joi
  .object<IEnvs>({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    RABBITMQ_URL: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new BadRequestException(error.message);
}

const envVars: IEnvs = value;

export const envs = {
  PORT: envVars.PORT,
  DATABASE_URL: envVars.DATABASE_URL,
  NATS_SERVERS: envVars.NATS_SERVERS,
  RABBITMQ_URL: envVars.RABBITMQ_URL,
  JWT_SECRET: envVars.JWT_SECRET,
};
