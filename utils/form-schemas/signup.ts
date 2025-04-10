import {z} from 'zod';

export const SignupSchema = z.object({
    // name: z
    //     .string()
    //     .nonempty({ message: 'Your name is required' })
    //     .min(5, { message: 'Your name should be more than 5 characters' })
    //     .max(50, { message: 'Name must be less than 50 characters' }),
    email: z
        .string()
        .nonempty({ message: 'Your email is required' })
        .email({ message: 'Invalid email address' }),
    // password: z
    //     .string()
    //     .nonempty({ message: 'Your password is required' })
    //     .min(6, { message: 'Your password must be at least 6 characters long' })
})

export type SignupSchemaType = z.infer<typeof SignupSchema>