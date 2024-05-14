import { GetProducts } from "@/types/response";
import { get } from "@/utils/fetch";

export const getProducts = async () => {
  const data = await get<GetProducts>(`/products`);
  return data;
};
