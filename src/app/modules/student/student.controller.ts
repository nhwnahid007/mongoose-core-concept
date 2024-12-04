import { Request, Response } from 'express';
import { StudentServices } from './student.service';

import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    //creating a schema validaion using joy

    const studentSchema = Joi.object({
      id: Joi.string().required().messages({
        'any.required': 'ID is required',
      }),
      name: Joi.object({
        firstName: Joi.string().required().max(20),
        middleName: Joi.string().max(20),
        lastName: Joi.string().required().max(20),
      }).required().messages({
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
      guardian: Joi.object({
        fatherName: Joi.string().required(),
      }).required().messages({
        'any.required': 'Guardian is required',
      }),
      localGuardian: Joi.object({
        // Define the localGuardianSchema fields here
      }).required().messages({
        'any.required': 'Local guardian is required',
      }),
      profileImage: Joi.string(),
      isActive: Joi.string().valid('active', 'blocked').default('active'),
    });


    const { student: studentData } = req.body; //for big data
    const {value,error} =studentSchema.validate(studentData)
    console.log({error},{value})

    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.details.map(detail => detail.message),
      });
    }

    //will call service function to send this data

    const result = await StudentServices.createStudentIntoDb(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create student',
      error: error.message,
    });
  }
  //send response
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDb();

    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error.message,
    });
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDb(studentId);

    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve student',
      error: error.message,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}; // export as object type
