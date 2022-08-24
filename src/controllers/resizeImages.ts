import { Request, Response } from 'express';
import configImage from '../utilities/configImage';
import imageExist from '../utilities/imageExist';
import resizeImages from '../utilities/resizeImages';

const getImageAfterResizing = async (req: Request, res: Response) => {
  const name: string = req.query.name as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const { iamgePath, imageThumb } = configImage.configPathImage({ name, width, height });
  try {
    const imagePathIsExist = await imageExist(imageThumb);
    if (imagePathIsExist !== null) return res.status(409).send(`Image (${name}_${width}_${height}) is already exists.`);
    await resizeImages(iamgePath, width, height, imageThumb);
    res.status(200).sendFile(imageThumb);
  } catch {
    res.status(500).send('Erro! Image could not be processed. Try agin.');
  }
};

export default getImageAfterResizing;
