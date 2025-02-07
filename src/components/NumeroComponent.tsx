import React from 'react';
import { TextInput } from 'react-native';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const NumeroComponent = ({ placeholder, value, onChangeText }:Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};