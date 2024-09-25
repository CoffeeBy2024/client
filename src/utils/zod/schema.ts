import { z } from 'zod';

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const firstNameSchema = z
  .string()
  .min(1, 'First name must contain at least one character')
  .regex(
    nameRegex,
    'First name must not contain special characters or numbers'
  );

export const lastNameSchema = z
  .string()
  .min(1, 'Last name must contain at least one character')
  .regex(nameRegex, 'Last name must not contain special characters or numbers');

export const emailSchema = z
  .string()
  .trim()
  .email()
  .regex(
    emailRegex,
    'Please enter a valid email address in the format: name@example.com'
  );

export const passwordSchema = z
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

export const confirmPasswordSchema = z.string();
