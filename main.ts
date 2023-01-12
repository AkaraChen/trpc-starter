import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import logger from './global/logger';
import 'reflect-metadata';
import { route } from './router';
import { init } from './model/source';
import analyse from './middleware/express/analyse';
import cors from './middleware/express/cors';
import security from './middleware/express/security';
import { config, currentMode } from './env';

const start = async () => {
    logger.info('Loading config...');
    const { PORT } = config;
    logger.success(`Config loaded, current in ${currentMode} mode.`);
    const trpc = trpcExpress.createExpressMiddleware({ router: route });
    logger.info('Starting trpc server...');
    const app = express();
    app.use(security, analyse, cors);
    app.use('/trpc', trpc);
    await init();
    app.listen(PORT, () =>
        logger.success(`Server is running on http://localhost:${PORT}`));
};

start();
