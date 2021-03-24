import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import conntainerStyle from '../../styles/container';

const Home = () => {

  const {containerStyle, textStyle} = styles;

  return (
    <>
      <StatusBar
        backgroundColor="#7727FF"
        hidden={false} translucent={false}
      />

      <View style={[conntainerStyle.appContainer, containerStyle]}>
        <Text style={[textStyle]}>Coming Soon ...</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textStyle: {
    color: '#7727FF',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
