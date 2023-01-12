/* eslint-disable no-unused-vars */
import fs from 'node:fs';
import dotenv from 'dotenv';

export enum Environment {
    development = 'development',
    production = 'production'
}

export interface IConfig {
    JWTSECRET: string
    PORT: number
}

export const currentMode = process.env.NODE_ENV === 'development'
    ? Environment.development
    : Environment.production;

const development = fs.readFileSync('.env.development');
const production = fs.readFileSync('.env.production');

const current = currentMode === Environment.development ? development : production;

export const config = dotenv.parse(current) as unknown as IConfig;

export const isDEV = currentMode === Environment.development;
