import express, { Application, Request, Response } from 'express';
import routes from './routes';
import morgan from 'morgan';
const app:Application = express();

const PORT = 5000;

app.use(morgan("dev"))

app.get('/', (req:Request, res: Response): void => {
  res.send('Hello! There.');
});

app.use('/api', routes);

app.get('*', (req:Request, res: Response): void =>{
  res.status(404).send("Oops! This page isn\'t found.");
});

app.listen(PORT, (): void => console.info(`sever is runing on http://localhost:${PORT}`));

export default app;
