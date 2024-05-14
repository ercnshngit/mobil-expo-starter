import { createProduct } from "@/services/products";
import { ProductCreateForm } from "@/types/products";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";

export default function useCreateProduct(){
    return useMutation({
        mutationKey: ["createUser"],
        mutationFn: (product: ProductCreateForm) => createProduct(product),
        onSuccess: (data) => {
            Alert.alert("Product created" + data.data?.id);
        },
        onError: () => {
            Alert.alert("Failed to create product");
        },
    });
} 