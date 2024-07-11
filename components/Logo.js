import{ StyleSheet, Image, View} from 'react-native';

const LogoImage = require('../assets/Logo2.png');

export default function Logo(){
    return(
        <View style={styles.logoContainer}>
            <Image source={LogoImage} style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        position: 'absolute',
        top: 100,
        left: '25%',
        transform:[{ translateX: -50  }],
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    },
});