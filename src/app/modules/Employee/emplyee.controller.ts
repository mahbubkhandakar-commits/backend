import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { EmployeeService } from "./employee.service";
import sendResponse from "../../utils/sendResponse";
import { HttpStatus } from "http-status-ts";

const createEmplyee = catchAsync(async (req: Request, res: Response) => {
    const employeeData = req.body;
    const result = await EmployeeService.createEmployeeIntoDb(employeeData);
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Employee created successfully',
        data: result,
    });
});
const getAllEmployees = catchAsync(async (req: Request, res: Response) => {
    const result = await EmployeeService.getAllEmployeesFromDb();
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Employees retrieved successfully',
        data: result,
    });
});

const updateEmployee = catchAsync(async (req: Request, res: Response) => {
    const employeeId = req.params.id;
    const updateData = req.body;
    const result = await EmployeeService.updateEmployeeInDb(employeeId, updateData);
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Employee updated successfully',
        data: result,
    });
});

const deleteEmployee = catchAsync(async (req: Request, res: Response) => {
    const employeeId = req.params.id;
    const result = await EmployeeService.deleteEmployeeFromDb(employeeId);
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Employee deleted successfully',
        data: result,
    });
});

export const EmployeeController = {
    createEmplyee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee
}
