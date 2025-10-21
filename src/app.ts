import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

const corsOptions = {
  origin: process.env.CLIENT_URL || 'https://task-manager-client-dusky.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Content-Range'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Kazi Marketing Task Portal!');
});
app.use(globalErrorHandler);

export default app;