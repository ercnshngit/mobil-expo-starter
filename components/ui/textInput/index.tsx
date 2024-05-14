import React from 'react';
import { View, TextInput } from 'react-native';

interface TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  onBlur?: () => void;
}

const TextInputComponent: React.FC<TextInputProps> = ({
  placeholder,
  onChangeText,
  value,
  onBlur
}) => {
  return (
    <View
      className="bg-yellow-400 p-2 rounded-md my-1"
    >
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
      />
    </View>
  );
};

export default TextInputComponent;
