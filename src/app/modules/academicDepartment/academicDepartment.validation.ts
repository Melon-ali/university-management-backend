import { z } from 'zod';

const createAcademicDeparmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string',
      required_error: 'Faculty is requird',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be string',
      required_error: 'Name is Required',
    }),
  }),
});

const updateAcademicDeparmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Department must be string',
        required_error: 'Faculty is requird',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty must be string',
        required_error: 'Name is Required',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDeparmentValidationSchema,
  updateAcademicDeparmentValidationSchema,
};
