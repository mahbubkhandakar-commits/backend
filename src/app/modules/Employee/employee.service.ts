import { TEmployee } from "./employee.interface";
import { Emplyee } from "./emplyee.model";

const createEmployeeIntoDb = async(employeeData: TEmployee) => {
    const result = await Emplyee.create(employeeData);
    return result;
    
}

const getAllEmployeesFromDb = async() => {
    const result = await Emplyee.find().exec();
    return result;
}

const updateEmployeeInDb = async(employeeId: string, updateData: Partial<TEmployee>) => {
    const result = await Emplyee.findByIdAndUpdate(employeeId, updateData, { new: true }).exec();
    return result;
}

const deleteEmployeeFromDb = async(employeeId: string) => {
    const result = await Emplyee.findByIdAndDelete(employeeId).exec();
    return result;
}

export const EmployeeService = {
    createEmployeeIntoDb,
    getAllEmployeesFromDb,
    updateEmployeeInDb,
    deleteEmployeeFromDb
}