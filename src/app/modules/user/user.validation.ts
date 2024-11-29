import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string({
    invalid_type_error: 'Password must be string',
  }),
  password: z
    .string()
    .max(20, { message: 'Password can not be more than 20 characters' }),
});

export const UserValidation = {
  userValidationSchema,
};
