interface IFormatData {
  ext: string;
  url: string;
  name: string;
}

interface IFormat {
  large: IFormatData;
  small: IFormatData;
  medium: IFormatData;
  thumbnail: IFormatData;
}

interface IProductImagesMockData {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  formats: IFormat;
  url: string;
}

export interface IProductImagesMock {
  data: IProductImagesMockData[];
}
