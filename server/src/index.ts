import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';
import searchRoutes from './routes/searchRoutes';
import teamRoutes from './routes/teamRoutes';
import userRoutes from './routes/userRoutes';
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req:any, res:any) => {
  res.send('Welcome to the Project Management API');
});


app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes); 
app.use("/search", searchRoutes);
app.use("/teams", teamRoutes);
app.use("/users", userRoutes);

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
