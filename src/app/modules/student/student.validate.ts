import Joi from "joi";

const userNameValidationSchema = Joi.object({
    firstName: Joi.string().required().max(20),
    middleName: Joi.string().max(20),
    lastName: Joi.string().required().max(20),
  });

  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
    });

  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'any.required': 'ID is required',
    }),
      name: userNameValidationSchema.required().messages({
      'any.required': 'Name is required',
    }),
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
      'any.required': 'Gender is required',
      'any.only': '{#value} is not a valid gender',
    }),
    dateOfBirth: Joi.string(),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': '{#value} is not a valid email',
    }),
    contactNo: Joi.string().required().messages({
      'any.required': 'Contact number is required',
    }),
    emergencyContactNo: Joi.string().required().messages({
      'any.required': 'Emergency contact number is required',
    }),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').messages({
      'any.only': '{#value} is not a valid blood group',
    }),
    presentAddress: Joi.string().required().messages({
      'any.required': 'Present address is required',
    }),
    permanentAddress: Joi.string().required().messages({
      'any.required': 'Permanent address is required',
    }),
    guardian: guardianValidationSchema.required().messages({
      'any.required': 'Guardian is required',
    }),
    localGuardian: localGuardianValidationSchema.required().messages({
      'any.required': 'Local guardian is required',
    }),
    profileImage: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
  });

  export default studentValidationSchema;
