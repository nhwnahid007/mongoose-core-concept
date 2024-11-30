import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//parsers

app.use(express.json());
app.use(cors());

//Application routes

app.use('/api/v1/students', StudentRoutes); //api/v1/students/create-student

const getAcontroller = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getAcontroller);

export default app;
