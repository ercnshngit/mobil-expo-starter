import ButtonComponent from "@/components/ui/button";
import ErrorMessage from "@/components/ui/error";
import TextInputComponent from "@/components/ui/textInput";
import { productCreateFormSchema } from "@/forms/products";
import useCreateProduct from "@/hooks/useCreateProduct";
import { createProduct } from "@/services/products";
import { ProductCreateForm } from "@/types/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function ProductCreatePage() {
  //hooks useCreateProduct
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductCreateForm>({
    resolver: zodResolver(productCreateFormSchema),
  });

  const createProductMutation = useCreateProduct();

  const onSubmit = handleSubmit((data) => {
    createProductMutation.mutate(data);
  });

  return (
    <View className="px-4 py-2">
      {/*  bu component */}
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          // bu ui
        <TextInputComponent
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
     <ErrorMessage errors={errors} name="title" /> 
      {/* shadcn cok guzel ayarlamis onu inceleyebiliriz */}
    

      {/* ui */}
      <ButtonComponent title="Submit" onPress={onSubmit} />
    
    </View>
  );
}
