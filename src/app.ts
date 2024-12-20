import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorhandler from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';
const app: Application = express();
import cookieParser from 'cookie-parser';

// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: ['http://localhost:5173']}));

// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

app.use(globalErrorhandler);

// Not Found
app.use(notFound);

export default app;
