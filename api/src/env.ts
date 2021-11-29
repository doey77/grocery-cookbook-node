/**
 * Create an .env file in the api/ folder. See dev.env for an example (or just use it for dev)
 */

import { config } from 'dotenv';

config();

const env = {
    name: process.env.NODE_ENV!,
    cors: process.env.CORS_ORIGINS!.split(";"),
};

export const isDev = env.name === 'development';

export default env;