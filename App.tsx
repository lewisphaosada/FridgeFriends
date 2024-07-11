import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false,}}>
        <Stack.Screen name={"Home"} component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles =StyleSheet.create({})


