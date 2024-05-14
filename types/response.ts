import { Product } from "./product";

export interface GetProducts {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
