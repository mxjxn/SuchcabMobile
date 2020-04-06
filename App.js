import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import styled from 'styled-components/native';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    'PermanentMarker': require('./assets/fonts/PermanentMarker-Regular.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
          <Image source={require('./assets/images/callig1.png')}
            style={styles.stretch} />
          <Text
            style={{fontFamily: 'PermanentMarker', fontSize: 60}}
            >such.cab</Text>
          <Text
            style={{fontFamily: 'Lato-Regular', fontSize: 20}}
          >
              Rides and tours and stuff.
          </Text>
          <TouchableOpacity
            onPress={() => alert('You\'re cute')}
            style={styles.button}>
              <Text
                style={styles.buttonText}>
                  Log In or Sign Up!
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  button: {
    backgroundColor: '#f77',
    padding: 20,
    marginTop: 10,
    borderRadius: 20,
    color: '#333',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }
});
