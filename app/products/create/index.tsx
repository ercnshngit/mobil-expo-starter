import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { productCreateFormSchema } from "@/forms/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/services/products";
import { CreateProduct, ProductCreateForm } from "@/types/products";

export default function ProductCreatePage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductCreateForm>({
    resolver: zodResolver(productCreateFormSchema),
  });

  const createProductMutation = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: (product: ProductCreateForm) => createProduct(product),
    onSuccess: (data) => {
      Alert.alert("Product created" + data.data?.id);
    },
    onError: () => {
      Alert.alert("Failed to create product");
    },
  });

  const onSubmit = handleSubmit((data) => {
    createProductMutation.mutate(data);
  });

  return (
    <View className="px-4 py-2">
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            className="px-4 py-2 bg-white border-2 border-gray-300 rounded-md"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.title && <Text>{errors.title.message}</Text>}

      {errors && <Text>{JSON.stringify(errors)}</Text>}
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}
