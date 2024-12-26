import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
    .messages({
      'string.base': 'First Name must be a string.',
      'string.empty': 'First Name is required.',
      'string.max': 'First Name cannot be more than 20 characters.',
      'string.pattern.name': '{#value} is not in capitalize format.',
    }),
  middleName: Joi.string().trim().allow(null, '').optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]+$/, { name: 'alpha' })
    .messages({
      'string.base': 'Last Name must be a string.',
      'string.empty': 'Last Name is required.',
      'string.pattern.name': '{#value} is not valid.',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': "Father's Name is required.",
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': "Father's Occupation is required.",
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': "Father's Contact Number is required.",
  }),
  motherName: Joi.string().required().messages({
    'string.empty': "Mother's Name is required.",
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': "Mother's Occupation is required.",
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': "Mother's Contact Number is required.",
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': "Local Guardian's Name is required.",
  }),
  occupation: Joi.string().required().messages({
    'string.empty': "Local Guardian's Occupation is required.",
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': "Local Guardian's Contact Number is required.",
  }),
  address: Joi.string().required().messages({
    'string.empty': "Local Guardian's Address is required.",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required.',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'Student Name is required.',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': 'Gender must be one of "male", "female", or "other".',
    'string.empty': 'Gender is required.',
  }),
  dateOfBirth: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .messages({
      'string.pattern.base':
        'Date of Birth must be in the format "YYYY-MM-DD".',
    }),
  email: Joi.string().email().required().messages({
    'string.email': '{#value} is not a valid email.',
    'string.empty': 'Email is required.',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact Number is required.',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency Contact Number is required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': 'Blood Group must be a valid type (e.g., "A+", "B-", etc.).',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present Address is required.',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent Address is required.',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian information is required.',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'Local Guardian information is required.',
  }),
  profileImg: Joi.string()
    .pattern(/\.(jpg|jpeg|png|gif)$/)
    .messages({
      'string.pattern.base':
        'Profile image must be a valid image URL (e.g., ".jpg", ".png").',
    }),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': 'Status must be either "active" or "blocked".',
  }),
});

export default studentValidationSchema;
