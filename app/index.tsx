import { useProducts } from "@/hooks/useProducts";
import { Text, View } from "react-native";

export default function Index() {
  const { data, error, isLoading } = useProducts();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data &&
        data.data?.products.map((product) => (
          <Text key={product.id}>{product.title}</Text>
        ))}
    </View>
  );
}
