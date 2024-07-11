import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import BackgroundImage from './components/BackgroundImage';
import tw from "twrnc"


export default function App() {
  return (
    <SafeAreaView style={tw`flex-1`}> 
    <View style={tw `flex-1`}>
      <StatusBar style="auto" />
      
      <BackgroundImage />
      
    </View>
    </SafeAreaView>
  );
}