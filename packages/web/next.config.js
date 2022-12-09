/* eslint-disable unicorn/prefer-module */
const dotenv = require('dotenv');
const fs = require('node:fs');
const currentEnvironment = process.env.NODE_ENV === 'development'
    ? '../../.env.development'
    : '../../.env.production';
const config = dotenv.parse(fs.readFileSync(currentEnvironment));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        core: config.COREURI
    }
};

module.exports = nextConfig;
