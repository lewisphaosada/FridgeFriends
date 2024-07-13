import{ Image, View} from 'react-native';
import tw from 'twrnc';

const LogoImage = require('../assets/Logo2.png');

export default function Logo(){
    return(
    <View style={tw`absolute top-32 left-1/6.7 transform -translate-x-1/2 items-center`}>
      <Image source={LogoImage} style={tw`w-72 h-72`} />
    </View>
    );
}