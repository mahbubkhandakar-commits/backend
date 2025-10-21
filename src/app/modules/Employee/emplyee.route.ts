import express from 'express';
import { EmployeeController } from './emplyee.controller';



const router = express.Router();

router.post('/',  EmployeeController.createEmplyee);

router.get('/',  EmployeeController.getAllEmployees);
router.patch('/:id',  EmployeeController.updateEmployee);
router.delete('/:id',  EmployeeController.deleteEmployee);

export const employeeRoutes = router;