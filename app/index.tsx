import { useProducts } from "@/hooks/useProducts";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { data, error, isLoading } = useProducts();
  return (
    <View className="items-center justify-center flex-1">
      <Link href="/products">View user</Link>
    </View>
  );
}
