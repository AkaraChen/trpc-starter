import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();

export const { middleware, router, procedure } = trpc;
