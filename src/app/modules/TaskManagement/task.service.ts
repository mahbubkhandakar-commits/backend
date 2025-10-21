import { TTask } from "./task.interface";
import { Task } from "./task.model";

const createTaskIntoDB = async (payload: TTask)=> {
    const result = await Task.create(payload);
    return result;
}

const getAllTasksFromDB = async ()=> {
    const result = await Task.find().exec();
    return result;
}

const updatedTaskInDb = async (taskId: string, payload: Partial<TTask>) => {
    const result = await Task.findByIdAndUpdate(taskId, payload, { new: true }).exec();
    return result;
}

const deleteTaskFromDb = async (taskId: string) => {
    const result = await Task.findByIdAndDelete(taskId).exec();
    return result;
}

export const TaskService = {
    createTaskIntoDB,
    getAllTasksFromDB,
    updatedTaskInDb,
    deleteTaskFromDb
}