import { router } from './trpc';
import { greet } from './controller/greet';

export const route = router({
    greet
});

export type AppRouter = typeof route;
