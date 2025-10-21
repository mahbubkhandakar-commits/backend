/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';




export interface TUser {
  _id?: Types.ObjectId; 
  fullName: string; 
  companyName: string;
  email: string;
  contactNumber: string;
  password: string;
  role: TUserRole; 
  isBlocked: boolean;
   // Profile-related
  profilePic?: string;        // Cloudinary/local URL
  dob?: string;               // e.g. "1990-01-25"
  presentAddress?: string;
  permanentAddress?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  
}


export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;

  isUserBlocked(userEmail: string): Promise<TUser | null>;

  isUserExistByEmail(email: string): Promise<TUser | null>;
}



export type TUserRole = keyof typeof USER_ROLE;
