import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; //for big data
    //will call service function to send this data

    const result = await StudentServices.createStudentIntoDb(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  //send response
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDb();

    res.status(200).json({
      success: true,
      message: 'Students is retrieve successfully',
      data: result,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDb(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieve successfully',
      data: result,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}; // export as object type
