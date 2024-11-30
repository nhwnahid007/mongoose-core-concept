// Interface for guardian details
export type Guardian = {
  fatherName: string; // Father's name
  fatherOccupation: string; // Father's occupation
  fatherContactNo: string; // Father's contact number
  motherName: string; // Mother's name
  motherOccupation: string; // Mother's occupation
  motherContactNo: string; // Mother's contact number
};

// Interface for user's name
export type UserName = {
  firstName: string; // First name
  middleName: string; // Middle name
  lastName: string; // Last name
};

// Interface for local guardian details
export type LocalGuardian = {
  name: string; // Local guardian's name
  occupation: string; // Local guardian's occupation
  contactNo: string; // Local guardian's contact number
  address: string; // Local guardian's address
};

// Main interface for student details
export type Student = {
  id: string; // Student ID
  name: UserName; // UserName type for name
  gender: 'male' | 'female'; // Gender options
  dateOfBirth: string; // Date of birth
  email: string; // Email address
  ContactNO: string; // Contact number
  emergencyContactNo: string; // Emergency contact number
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; // Optional blood group
  presentAddress: string; // Present address
  permanentAddress: string; // Permanent address
  guardian: Guardian; // Guardian type for guardian details
  localGuardian: LocalGuardian; // LocalGuardian type for local guardian details
  profileImage?: string; // Optional profile image
  isActive: 'active' | 'blocked'; // Status options
};
