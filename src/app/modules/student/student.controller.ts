import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validate';



const createStudent = async (req: Request, res: Response) => {
  try {

    const { student: studentData } = req.body; //for big data
    const {value,error} =studentValidationSchema.validate(studentData)
    // eslint-disable-next-line no-console
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
      error: error,
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
      error: error,
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
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}; // export as object type
