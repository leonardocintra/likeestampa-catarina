import { IProductImagesMock } from "./IProductImagesMock";
import { IProductModel } from "./IProductModel";
import { ISubCategory } from "./ISubCategory";

export interface IProduct {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: boolean;
  basePrice: number;
  sub_category: ISubCategory;
  mocks: IProductImagesMock;
  product_models: IProductModel;
}
