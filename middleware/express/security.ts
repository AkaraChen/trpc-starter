import { Handler } from 'express';
import helmet from 'helmet';
import logger from '../../global/logger';
import rateLimit from 'express-rate-limit';
import { isDEV } from '../../env';

const fileExtensions = ['php', 'asp', 'js', 'ts'];
const file: Handler = (request, response, next) => {
    const { path, ip } = request;
    for (const fileExtension of fileExtensions) {
        if (path.endsWith(fileExtension)) {
            logger.warn(`Seems like an attacker, ${ip}, ${path}`);
            response.send('Something wrong');
            return;
        }
    }
    next();
};

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10_000
});

const list = [helmet(), file];
if (!isDEV) list.push(limiter);

export default list;
