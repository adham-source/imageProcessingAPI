import path from 'path';
const imageNames: string[] = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];

interface ConfigProcessImage {
  name: string;
  width?: number;
  height?: number;
}

const imageNamesAllow = (name: string): boolean => {
  if (imageNames.includes(name)) return true;
  return false;
};

const configPathImage = (queryParams: ConfigProcessImage): { iamgePath: string; imageThumb: string } => {
  const iamgePath: string = path.join(__dirname, `../../assets/images/full/${queryParams.name}.jpg`);
  const imageThumb: string = path.join(
    __dirname,
    `../../assets/images/thumbnail/${queryParams.name}_${queryParams.width}_${queryParams.height}.jpg`,
  );

  return { iamgePath, imageThumb };
};

export default { imageNamesAllow, configPathImage };
