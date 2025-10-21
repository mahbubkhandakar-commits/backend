import express from 'express';
import { taskController } from './task.controller';


const router = express.Router();


router.post('/',  taskController.createTask);

router.get('/',  taskController.getAllTasks);

router.patch('/:taskId',  taskController.updateTask);

router.delete('/:taskId',  taskController.deleteTask);



export const taskRoutes = router;