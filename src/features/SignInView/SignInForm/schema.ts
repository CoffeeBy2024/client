import { z } from 'zod';

import { emailSchema, passwordSchema } from '@/utils/zod';

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignInInputs = z.infer<typeof signInSchema>;

export const signInSchemaShape = signInSchema._def.shape();
