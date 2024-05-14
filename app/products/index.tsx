import ProductList from "@/components/products/product-list";
import { useProducts } from "@/hooks/useProducts";
import { View } from "react-native";

export default function Index() {
  const { data, error, isLoading } = useProducts();
  return (
    <View className="items-center justify-center flex-1">
      <ProductList products={data?.data?.products} />
    </View>
  );
}
