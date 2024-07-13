import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function ColorBlock() {
  return (
   
    <View style={tw`absolute top-1/6.3 left-1/8.5 w-1/1.3 h-1/1.9 bg-orange-200 opacity-98 rounded-lg flex justify-center items-center`}>
      <Text style={tw`text-black text-4xl mt-30`}>Welcome!</Text>
    </View>
  );
}
