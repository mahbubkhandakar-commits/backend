
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';


const app: Application = express();



// Use CORS with proper configuration
app.use(
  cors({
    origin: 'https://task-manager-client-dusky.vercel.app', // ✅ your frontend URL
    credentials: true, // ✅ allow cookies, headers, etc.
  }),
);

app.use(express.json());



// Application routes
app.use('/api', router);


app.get('/', (req: Request, res: Response) => {
  res.send('Kazi Marketing Task Portal!');
});

app.use(globalErrorHandler);

// app.use(notFound);

// Export both app and server
export default app;