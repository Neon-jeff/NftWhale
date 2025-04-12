import { z } from 'zod';

export const LoginSchema = z.object({
    email: z
        .string()
        .nonempty({ message: 'Your email is required' })
        .email({ message: 'Invalid email address' }),
    password: z
        .string()
        .nonempty({ message: 'Your password is required' })
        .min(6, { message: 'Your password must be at least 6 characters long' })
})

export type LoginSchemaType = z.infer<typeof LoginSchema>