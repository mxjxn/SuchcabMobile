import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

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
          <Text
            style={{fontFamily: 'PermanentMarker', fontSize: 60}}
            >such.cab</Text>
          <Text
            style={{fontFamily: 'Lato-Regular', fontSize: 20}}
            >Rides and tours and stuff.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
