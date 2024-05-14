import { View, Text, Button } from 'react-native'
import React, { Children, useEffect } from 'react'

export default function ErrorMessage({errors, name}: {errors: any, name: string}) {
  return (
    
    <View className = "flex justify-center items-center bg-red-200 my-3 " >
        {errors.title && <Text>{errors.title.message}</Text>}
    </View>
  )
}