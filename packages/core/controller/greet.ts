import {createGreet} from '../service/greet';
import {procedure, router} from '../trpc';
import {z} from 'zod';

export const greet = router({
    create: procedure.input(z.string().min(3).max(20).trim()).query(({input}) => {
        return createGreet(input);
    })
});
