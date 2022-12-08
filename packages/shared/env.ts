/* eslint-disable no-redeclare */
import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

export type config = {
    COREURI: string,
    FRONTENDURI: string,
    MANAGEURI: string
}

const directory = path.resolve('../../');

const development = fs.readFileSync(
    path.resolve(directory, './.dev.env')
);
const production = fs.readFileSync(
    path.resolve(directory, '.prod.env')
);

export const isDEV = process.env.NODE_ENV === 'development';
export const currentMode = isDEV ? 'development' : 'production';
export type mode = typeof currentMode;

const current = isDEV
    ? development
    : production;

export const config = dotenv.parse(current) as config;
