export interface ICategory {
  id: number;
  name: string;
  active: boolean;
  description: string;
  slug: string;
  parentId: number;
}
