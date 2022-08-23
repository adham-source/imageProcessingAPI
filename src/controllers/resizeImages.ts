import { Request, Response } from 'express';
import { configPathImage } from '../utilities/resizeImages';

const getImageAfterResizing = (req: Request, res: Response): void => {
  const { imageThumb } = configPathImage(req.query.name as string);
  res.status(200).sendFile(imageThumb);
};

export default getImageAfterResizing;
