import{ StyleSheet, Image, View} from 'react-native';

const LogoImage = require('../assets/Logo.png');

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
        top: 200,
        left: '35%',
        transform:[{ translateX: -50  }],
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 100,
        borderRadius:10,
    },
});