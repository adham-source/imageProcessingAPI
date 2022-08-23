import express, { Request, Response, Router } from 'express';
import resizeImages from './api/resizeImages';
const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send(`proccessing image api`);
});

routes.use('/images', resizeImages);

export default routes;
