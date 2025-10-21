"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const employee_service_1 = require("./employee.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_ts_1 = require("http-status-ts");
const createEmplyee = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeData = req.body;
    const result = yield employee_service_1.EmployeeService.createEmployeeIntoDb(employeeData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_ts_1.HttpStatus.OK,
        success: true,
        message: 'Employee created successfully',
        data: result,
    });
}));
const getAllEmployees = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_service_1.EmployeeService.getAllEmployeesFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_ts_1.HttpStatus.OK,
        success: true,
        message: 'Employees retrieved successfully',
        data: result,
    });
}));
const updateEmployee = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = req.params.id;
    const updateData = req.body;
    const result = yield employee_service_1.EmployeeService.updateEmployeeInDb(employeeId, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_ts_1.HttpStatus.OK,
        success: true,
        message: 'Employee updated successfully',
        data: result,
    });
}));
const deleteEmployee = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = req.params.id;
    const result = yield employee_service_1.EmployeeService.deleteEmployeeFromDb(employeeId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_ts_1.HttpStatus.OK,
        success: true,
        message: 'Employee deleted successfully',
        data: result,
    });
}));
exports.EmployeeController = {
    createEmplyee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee
};
