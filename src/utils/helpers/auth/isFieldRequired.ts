import { z } from 'zod';

export const isFieldRequired = <T>(schema: T, field: keyof T) => {
  const fieldSchema = schema[field] as z.ZodTypeAny;
  return !(fieldSchema.isOptional?.() || fieldSchema.isNullable?.());
};
