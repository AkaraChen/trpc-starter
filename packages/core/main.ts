import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import logger from './global/logger';
import 'reflect-metadata';
import {route} from './router';
import {init} from './model/source';

const trpc = trpcExpress.createExpressMiddleware({router: route});

const start = async () => {
    logger.info('Starting trpc server...');
    const app = express();
    app.use('/trpc', cors(), trpc);
    await init();
    app.listen(3000, () => {
        logger.success('Server is running on http://localhost:3000');
    });
};

start();
