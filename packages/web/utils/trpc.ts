import {httpBatchLink} from '@trpc/client';
import {createTRPCNext} from '@trpc/next';
import type {AppRouter} from 'core/router';

function getBaseUrl() {
    return process.env.core;
}

export const trpc = createTRPCNext<AppRouter>({
    config() {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/trpc`
                })
            ]
        };
    },
    ssr: true
});
