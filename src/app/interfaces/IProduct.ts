import { ICategory } from "./ICategory";
import { IVariation } from "./IVariation";

export interface IProduct {
  id: string;
  name: string;
  active: boolean;
  description: string;
  slug: string;
  price: number;
  categories: ICategory[];
  variations: IVariation[];
}
