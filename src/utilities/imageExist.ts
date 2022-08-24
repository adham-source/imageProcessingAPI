import { promises as fsPromises } from 'fs';

const imageExist = async (imageThumbPath: string): Promise<string | null> => {
  try {
    await fsPromises.access(imageThumbPath);
    return imageThumbPath;
  } catch {
    return null;
  }
};

export default imageExist;
