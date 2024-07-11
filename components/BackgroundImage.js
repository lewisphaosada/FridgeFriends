import React from 'react';
import { ImageBackground } from 'react-native';
import Logo from './Logo';
import ColorBlock from './ColorBlock';
import tw from 'twrnc';

const PlaceholderImage = require('../assets/ScreenBG.jpg');

export default function BackgroundImage() {
  return (
    <ImageBackground source={PlaceholderImage} style={tw`flex-1`} imageStyle={tw`w-full h-full resizeMode-cover`}>
        <ColorBlock />
        <Logo />
    </ImageBackground>
  );
}


