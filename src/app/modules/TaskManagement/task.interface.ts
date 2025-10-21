import { Types } from "mongoose";

export type SubTask = {
    title: string;
    isCompleted: boolean;
};

export type TTask = {
    title: string;
    description?: string;
    status: 'pending' | 'in-progress' | 'completed' | 'stuck';
    priority: 'low' | 'medium' | 'high';
    dueDate?: Date;
    assignedTo:  Types.ObjectId; 
    clientName: Types.ObjectId;
    subTasks?: SubTask[];
};