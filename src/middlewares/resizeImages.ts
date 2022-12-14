import { NextFunction, Request, Response } from 'express';
import configImage from '../utilities/configImage';

const validateResizeImagesQuery = (req: Request, res: Response, next: NextFunction) => {
  const name: unknown = req.query.name;
  const isValidName: boolean = configImage.imageNamesAllow(name as string);
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  if (Object.entries(req.query).length === 0)
    return res.send('Error! Please process image into url query by adding name, width and height.');
  if (name === undefined || name === '') return res.status(400).send('Error! Please write name image.');
  if (!isValidName) return res.status(400).send('This name of image not exist. Write valid name.');
  if (width === undefined || !width) return res.status(400).send('Error! Please write width image and must be number.');
  if (height === undefined || !height)
    return res.status(400).send('Error! Please write height image and must be number.');
  next();
};

export default validateResizeImagesQuery;
