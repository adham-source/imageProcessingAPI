import sharp from 'sharp';

const resizeImages = async (input: string, width: number, height: number, output: string): Promise<null | string> => {
  try {
    await sharp(input).resize(width, height).toFormat('jpeg', { mozjpeg: true }).toFile(output);
    return null;
  } catch {
    return 'Image could not be processed. Try agin.';
  }
};

export default resizeImages;
