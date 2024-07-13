import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function SignUp(){
    return(
        <View style={tw`absolute top-122 left-1/5 w-3/5`}>

        <TouchableOpacity style={tw`bg-blue-500 p-2 rounded-lg w-1/2`}>
          <Text style={tw`text-white text-xl font-bold text-center`}>Sign Up</Text>
        </TouchableOpacity>

     
      </View>
    );
}