import express, { NextFunction } from 'express';
import sharp from 'sharp';
import path from 'path';

export const configPathImage = (name: string): { iamgePath: string; imageThumb: string } => {
  const iamgePath: string = path.join(__dirname, `../../assets/images/full/${name}.jpg`);
  const imageThumb: string = path.join(__dirname, `../../assets/images/thumbnail/${name}.jpg`);
  return { iamgePath, imageThumb };
};

const resizeImage = async (req: express.Request, res: express.Response, next: NextFunction): Promise<void> => {
  const name: string = req.query.name as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const { iamgePath, imageThumb } = configPathImage(name);

  try {
    await sharp(iamgePath)
      .resize({
        width: width,
        height: height,
      })
      .toFormat('jpeg', { mozjpeg: true })
      .toFile(imageThumb);
    res.sendFile(imageThumb);
    next();
  } catch {
    res.status(400).send('Oops! some wrong in url');
  }
};

export default resizeImage;
