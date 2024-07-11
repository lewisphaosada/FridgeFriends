import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View style={tw `flex-1`}>
    <StatusBar style="auto" />
    <SafeAreaView style={tw`flex-1`}> 

      <BackgroundImage />
  
      </SafeAreaView>
    </View>
  );
};
export default HomeScreen;