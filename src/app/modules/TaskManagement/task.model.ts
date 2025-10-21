import { model, Schema } from "mongoose";
import { TTask } from "./task.interface";

const taskSchema = new Schema<TTask>(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "stuck"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    subTasks: [
      {
        title: { type: String, required: true },
        isCompleted: { type: Boolean, default: false },
      },
    ],
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: [true, "Assigned to is required"],
    },
    clientName: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: [true, "Client name is required"],
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true, // optional but useful
  }
);

export const Task = model<TTask>("Task", taskSchema);
