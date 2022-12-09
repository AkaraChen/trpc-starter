import log4js from 'log4js';
import consola from 'consola';
import {currentMode} from 'shared/env';

log4js.configure({
    appenders: {
        core: {
            type: 'file',
            filename: '../../core.log'
        }
    },
    categories: {
        default: {
            appenders: ['core'],
            level: currentMode === 'development'
                ? 'info'
                : 'warn'
        }
    }
});

const logger = log4js.getLogger();

export default {
    log(message: string) {
        consola.log(message);
    },
    warn(warn: string) {
        consola.warn(warn);
        logger.warn(warn);
    },
    error(error: Error | string) {
        consola.error(error);
        logger.error(error);
    },
    info(message: string) {
        consola.info(message);
        logger.info(message);
    },
    success(message: string) {
        consola.success(message);
        logger.info(message);
    }
};
