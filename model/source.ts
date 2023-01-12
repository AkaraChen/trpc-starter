import logger from '../global/logger';
import { DataSource } from 'typeorm';
import Todo from './todo';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: '../data.db',
    entities: [Todo]
});

export const init = async () => {
    logger.info('Connecting DB');
    try {
        AppDataSource.initialize();
        logger.success('Init database connection success.');
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
};
