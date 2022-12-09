import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import logger from './global/logger';
import 'reflect-metadata';
import {route} from './router';
import {init} from './model/source';
import {config, currentMode} from 'shared/env';

const start = async () => {
    logger.info('Loading config...');
    const {COREURI} = config;
    const {port} = new URL(COREURI);
    logger.success(`Config loaded, current in ${currentMode} mode.`);
    const trpc = trpcExpress.createExpressMiddleware({router: route});
    logger.info('Starting trpc server...');
    const app = express();
    app.use('/trpc', cors(), trpc);
    await init();
    app.listen(port, () =>
        logger.success(`Server is running on ${COREURI}`));
};

start();
