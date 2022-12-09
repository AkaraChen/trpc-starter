/* eslint-disable no-undef */
import {httpBatchLink, createTRPCProxyClient} from '@trpc/client';
import type {AppRouter} from 'core/router';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const client = createTRPCProxyClient<AppRouter>({
        links: [
            httpBatchLink({
                url: `${config.public.core}/trpc`
            })
        ]
    });
    return {
        provide: {
            client
        }
    };
});
