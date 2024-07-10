import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BackgroundImage from './components/BackgroundImage';

export default function App() {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
