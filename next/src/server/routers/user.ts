import RouteResponse from "@/models/RouteResponse";
import { procedure, router } from "../trpc";
import { z } from 'zod';


export const userRouter = router({
    // index: procedure.query(async (opts) => {
    //     console.log('hello from the server side.')
    //     return 'Hello world';
    // }),
    forgotPassword: procedure.input(z.object({
        email: z.string(),
    })).mutation(async (opts) => {
        // Design:
        //   Website: https://docs.boom.pagekey.io/architecture/user/index.html#forgot-password-page
        //   Source:  docs/architecture/user/index.md
        try {
            return {
                status: 'error',
                message: 'This route is not yet implemented.',
            } as RouteResponse;
        } catch(e) {
            return {
                status: 'error',
                message: 'An unknown error occurred.',
            } as RouteResponse;
        }
    }),
});