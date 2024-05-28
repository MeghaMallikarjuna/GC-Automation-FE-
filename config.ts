import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.USERNAME || !process.env.PASSWORD) {
  throw new Error('Environment variables USERNAME and PASSWORD must be set');
}

export const config = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};