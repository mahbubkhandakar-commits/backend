import { HttpStatus } from "http-status-ts";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TaskService } from "./task.service";

const createTask = catchAsync(async (req, res) => {
    const result = await TaskService.createTaskIntoDB(req.body);
    sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: 'Task created successfully',
    data: result,
  });
})

const getAllTasks = catchAsync(async (req, res) => {
    const result = await TaskService.getAllTasksFromDB();
    sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: 'Tasks fetched successfully',
    data: result,
  });
})

const updateTask = catchAsync(async (req, res) => {
    const { taskId } = req.params;
    const result = await TaskService.updatedTaskInDb(taskId, req.body);
    sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: result,
  });
}
);
const deleteTask = catchAsync(async (req, res) => {
    const { taskId } = req.params;
    const result = await TaskService.deleteTaskFromDb(taskId);
    sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: result,
  });
}
);  

export const taskController = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask  
}