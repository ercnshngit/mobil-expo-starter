import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";
import { ProductCreateForm } from "@/types/products";
import { createProduct } from "@/services/products";

export default function useCreateProduct() {
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: (product: ProductCreateForm) => createProduct(product),
    onSuccess: (data) => {
      // Handle successful user creation (e.g., show success message, redirect)
      Alert.alert("User created successfully!" + data.data?.id);
    },
    onError: (error) => {
      // Handle creation errors (e.g., show error message)
      console.error("Failed to create user:", error);
      Alert.alert("Failed to create user. Please try again.");
    },
  });
}
