import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function LogIn(){
    return(
        <View style={tw`absolute top-122 left-1/1.9 w-3/5`}>

        <TouchableOpacity style={tw`bg-blue-500 p-2 rounded-lg w-1/2`}>
          <Text style={tw`text-white text-xl font-bold text-center`}>Login</Text>
        </TouchableOpacity>

      </View>
    );
}