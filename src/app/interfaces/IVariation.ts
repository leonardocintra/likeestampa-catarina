import { IVariationValues } from "./IVariationValues";

export interface IVariation {
  id: number;
  name: string;
  values: IVariationValues[];
}
