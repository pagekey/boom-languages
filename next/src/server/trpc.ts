import { initTRPC } from '@trpc/server';


// Avoid exporting t
// Also common in i18n libs
const t = initTRPC.create();

export const middleware = t.middleware;
export const procedure = t.procedure;
export const router = t.router;
