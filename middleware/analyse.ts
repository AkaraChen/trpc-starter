import { Handler } from 'express';
import logger from '../global/logger';

const analyse: Handler = (request, _response, next) => {
    const { path, ip, method } = request;
    logger.info(`${path} ${method} ${ip}`);
    next();
};

export default analyse;
