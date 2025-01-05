import { string, z } from 'zod';

export const LoginSchema = z.object({
  email: string().min(1, 'Email is required').email({
    message: 'Please enter a valid email address.',
  }),
  password: string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
