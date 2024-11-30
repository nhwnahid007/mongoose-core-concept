import { model, Schema } from 'mongoose'; // Importing Mongoose model and Schema for MongoDB
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface'; // Importing interfaces for type-checking

// Schema for user's name
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true }, // First name is required
  middleName: { type: String }, // Middle name is optional
  lastName: { type: String, required: true }, // Last name is required
});

// Schema for guardian details
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true }, // Father's name is required
  fatherOccupation: { type: String, required: true }, // Father's occupation is required
  fatherContactNo: { type: String, required: true }, // Father's contact number is required
  motherName: { type: String, required: true }, // Mother's name is required
  motherOccupation: { type: String, required: true }, // Mother's occupation is required
  motherContactNo: { type: String, required: true }, // Mother's contact number is required
});

// Schema for local guardian details
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true }, // Local guardian's name is required
  occupation: { type: String, required: true }, // Local guardian's occupation is required
  contactNo: { type: String, required: true }, // Local guardian's contact number is required
  address: { type: String, required: true }, // Local guardian's address is required
});

// Main schema for student details
const studentSchema = new Schema<Student>({
  id: { type: String }, // Student ID, optional
  name: userNameSchema, // Embedded schema for name
  gender: ['male', 'female'], // Gender can be either male or female
  dateOfBirth: { type: String }, // Date of birth, optional
  email: { type: String, required: true }, // Email is required
  ContactNO: { type: String, required: true }, // Contact number is required
  emergencyContactNo: { type: String, required: true }, // Emergency contact number is required
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Blood group options
  presentAddress: { type: String, required: true }, // Present address is required
  permanentAddress: { type: String, required: true }, // Permanent address is required
  guardian: guardianSchema, // Embedded schema for guardian
  localGuardian: localGuardianSchema, // Embedded schema for local guardian
  profileImage: { type: String }, // Profile image, optional
  isActive: { type: String, default: 'active', enum: ['active', 'blocked'] }, // Status with default value
});

// Creating a Mongoose model for Student
export const StudentModel = model<Student>('Student', studentSchema); //uses the studentSchema 'Student' will save as database collection name
