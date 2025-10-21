import { model, Schema } from "mongoose";
import { TEmployee } from "./employee.interface";

const emplyeeSchema = new Schema<TEmployee>(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        position: { type: String, required: true },
        department: {
      type: String,
      enum: [
        "HR",
        "Engineering",
        "Sales",
        "Marketing",
        "Finance",
        "Operations",
        "IT",
        "Customer Support"
      ],
      required: true
    }
    },
    { timestamps: true }
);      
export const Emplyee = model<TEmployee>('emplyee', emplyeeSchema);