import { model, Schema } from 'mongoose'; // Importing Mongoose model and Schema for MongoDB
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface'; // Importing interfaces for type-checking

// Schema for user's name
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'First name is required'] }, // First name is required
  middleName: { type: String }, // Middle name is optional
  lastName: { type: String, required: [true, 'Last name is required'] }, // Last name is required
});

// Schema for guardian details
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father name is required'] }, // Father's name is required
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
  }, // Father's occupation is required
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is required'],
  }, // Father's contact number is required
  motherName: { type: String, required: [true, 'Mother name is required'] }, // Mother's name is required
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  }, // Mother's occupation is required
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
  }, // Mother's contact number is required
});

// Schema for local guardian details
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] }, // Local guardian's name is required
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  }, // Local guardian's occupation is required
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  }, // Local guardian's contact number is required
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  }, // Local guardian's address is required
});

// Main schema for student details
const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'ID is required'], unique: true }, // Student ID, optional
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  }, // Embedded schema for name
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  }, // Gender can be either male or female
  dateOfBirth: { type: String }, // Date of birth, optional
  email: { type: String, required: [true, 'Email is required'], unique: true }, // Email is required
  ContactNO: { type: String, required: [true, 'Contact number is required'] }, // Contact number is required
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  }, // Emergency contact number is required
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  }, // Blood group options
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  }, // Present address is required
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  }, // Permanent address is required
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required'],
  }, // Embedded schema for guardian
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian is required'],
  }, // Embedded schema for local guardian
  profileImage: { type: String }, // Profile image, optional
  isActive: { type: String, default: 'active', enum: ['active', 'blocked'] }, // Status with default value
});

// Creating a Mongoose model for Student
export const StudentModel = model<Student>('Student', studentSchema); //uses the studentSchema 'Student' will save as database collection name
