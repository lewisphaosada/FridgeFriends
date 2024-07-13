import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';
import HomePage from '../components/HomePage';
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View style={tw `flex-1`}>
    <StatusBar style="auto" />
    <SafeAreaView style={tw`flex-1`}> 

      <HomePage />
 
      </SafeAreaView>
    </View>
  );
};
export default HomeScreen;