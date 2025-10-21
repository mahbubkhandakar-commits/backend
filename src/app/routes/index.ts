import  { Router } from 'express';
import { userRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { clientRoutes } from '../modules/Client/client.route';
import { taskRoutes } from '../modules/TaskManagement/task.route';
import { employeeRoutes } from '../modules/Employee/emplyee.route';



const router = Router();

const moduleRoutes = [
   {
    path:'/users',
    route:userRoutes,
  }
  ,
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/clients',
    route: clientRoutes,
  },
  {
    path: '/tasks',
    route: taskRoutes,
  },
  {
    path: '/employees',
    route: employeeRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;