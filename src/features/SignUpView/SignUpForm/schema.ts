import { z } from 'zod';

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const firstNameSchema = z
  .string()
  .min(1, 'First name must contain at least one character')
  .regex(
    nameRegex,
    'First name must not contain special characters or numbers'
  );

const lastNameSchema = z
  .string()
  .min(1, 'Last name must contain at least one character')
  .regex(nameRegex, 'Last name must not contain special characters or numbers');

const emailSchema = z
  .string()
  .trim()
  .email()
  .regex(
    emailRegex,
    'Please enter a valid email address in the format: name@example.com'
  );

const passwordSchema = z
  .string()
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one digit')
  .regex(
    /[!@#$%^&*]/,
    'Password must contain at least one special character (e.g., !@#$%^&*)'
  )
  .min(8, 'Password must be at least 8 characters long')
  .refine((password) => !password.startsWith(' ') && !password.endsWith(' '), {
    message: 'Password must not contain leading or trailing whitespace',
  });
const confirmPasswordSchema = z.string();

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

export const isFieldRequired = <T>(schema: T, field: keyof T) => {
  const fieldSchema = schema[field] as z.ZodTypeAny;
  return !(fieldSchema.isOptional?.() || fieldSchema.isNullable?.());
};
