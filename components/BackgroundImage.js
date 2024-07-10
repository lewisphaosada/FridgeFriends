import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Logo from './Logo';

const PlaceholderImage = require('../assets/ScreenBG.jpg');

export default function BackgroundImage() {
  return (
    <ImageBackground source={PlaceholderImage} style={styles.image} imageStyle={styles.backgroundImage}>
        <Logo/>
       {/* > */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',   
  },
  backgroundImage:{
    resizeMode: 'cover',
  },
});
