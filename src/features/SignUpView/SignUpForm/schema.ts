import { z } from 'zod';

import {
  confirmPasswordSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from '@/utils/zod';

export const signUpSchema = z
  .object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type signUpInputs = z.infer<typeof signUpSchema>;

export const signUpSchemaShape = signUpSchema._def.schema._def.shape();
