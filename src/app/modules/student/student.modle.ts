import { Schema } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

// 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     avatar: String
//   });

const  userNameSchema  = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
    
})

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true},
    fatherOccupation: { type: String, required: true},
    fatherContactNo: { type: String, required: true},
    motherName: { type: String, required: true},
    motherOccupation: { type: String, required: true},
    motherContactNo: { type: String, required: true},
})

const localGuardianSchema = new Schema<LocalGuardian>({
    name: { type: String, required: true},
    occupation: { type: String, required: true},
    contactNo: { type: String, required: true},
    address: { type: String, required: true},
})    

const studentSchema = new Schema<Student>({
  id: { type: String }, //# String is in capital letter
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth:  { type: String},
  email: { type: String, required: true},
  ContactNO: { type: String ,required: true},
  emergencyContactNo: { type: String, required: true},
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], //# enum
  presentAddress: { type: String, required: true},
  permanentAddress: { type: String, required: true},
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String},
  isActive: { type: String, default: 'active', enum: ['active', 'blocked']},
});
