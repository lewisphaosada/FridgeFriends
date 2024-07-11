import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export default function ColorBlock() {
  return (
    <View style={tw`absolute top-1/6 left-1/8.5 w-1/1.3 h-1/1.8 bg-white opacity-95 rounded-lg`} />
  );
}