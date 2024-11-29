import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: 'First Name cannot be more than 20 characters.' })
    .refine((value) => /^[A-Z][a-z]*$/.test(value), {
      message: 'First Name must be in capitalize format.',
    }),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .nonempty({ message: 'Last Name is required.' })
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: 'Last Name must only contain letters.',
    }),
});

// Guardian Schema
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father's Name is required." }),
  fatherOccupation: z
    .string()
    .nonempty({ message: "Father's Occupation is required." }),
  fatherContactNo: z
    .string()
    .nonempty({ message: "Father's Contact Number is required." }),
  motherName: z.string().nonempty({ message: "Mother's Name is required." }),
  motherOccupation: z
    .string()
    .nonempty({ message: "Mother's Occupation is required." }),
  motherContactNo: z
    .string()
    .nonempty({ message: "Mother's Contact Number is required." }),
});

// Local Guardian Schema
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty({ message: "Local Guardian's Name is required." }),
  occupation: z
    .string()
    .nonempty({ message: "Local Guardian's Occupation is required." }),
  contactNo: z
    .string()
    .nonempty({ message: "Local Guardian's Contact Number is required." }),
  address: z
    .string()
    .nonempty({ message: "Local Guardian's Address is required." }),
});

// Main Student Schema
const studentValidationSchema = z.object({
  id: z.string().nonempty({ message: 'Student ID is required.' }),
  name: userNameValidationSchema,
  password: z.string().max(20),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({
      message: 'Gender must be one of "male", "female", or "other".',
    }),
  }),
  dateOfBirth: z
    .string()
    .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: 'Date of Birth must be in the format "YYYY-MM-DD".',
    })
    .optional(),
  email: z
    .string()
    .nonempty({ message: 'Email is required.' })
    .email({ message: 'Invalid email format.' }),
  contactNo: z.string().nonempty({ message: 'Contact Number is required.' }),
  emergencyContactNo: z
    .string()
    .nonempty({ message: 'Emergency Contact Number is required.' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
      errorMap: () => ({
        message: 'Blood Group must be a valid type (e.g., "A+", "B-", etc.).',
      }),
    })
    .optional(),
  presentAddress: z
    .string()
    .nonempty({ message: 'Present Address is required.' }),
  permanentAddress: z
    .string()
    .nonempty({ message: 'Permanent Address is required.' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z
    .string()
    .optional()
    .refine((value) => /\.(jpg|jpeg|png|gif)$/.test(value), {
      message:
        'Profile image must be a valid image URL (e.g., ".jpg", ".png").',
    }),
  isActive: z
    .enum(['active', 'blocked'], {
      errorMap: () => ({
        message: 'Status must be either "active" or "blocked".',
      }),
    })
    .default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
