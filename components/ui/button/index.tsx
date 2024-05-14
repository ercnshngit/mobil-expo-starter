import { View, Text, Button } from 'react-native'
import React, { Children, useEffect } from 'react'

export default function ButtonComponent({title, onPress}: {title: string, onPress: () => void}) {
  return (
    
    <View className = "flex justify-center items-center bg-green-400 " >
        <Button title={title} onPress={onPress} />
    </View>
  )
}