import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { heightPercentageToDP as hp, widthPercentageToDP as wp  } from 'react-native-responsive-screen';

export default class AppFirstLaunch extends Component {

  navigateTo = (screen, params) => this.props.navigation.navigate(screen, params);

  isFirstTimeUser = async () => {
    this.props.navigation.navigate('Signup');
    // try {
    //   const isFirstTimeUser = await AsyncStorage.getItem('first_time_user');
    //   const isLoggedIn = await AsyncStorage.getItem('token');
    //   if (isFirstTimeUser !== null) {
    //     if (isLoggedIn !== null) {
    //       this.props.navigation.navigate('Home');
    //     } else {
    //       this.props.navigation.navigate('Login');
    //     }
    //   } else {
    //     console.log('else', isFirstTimeUser);
    //     this.props.navigation.navigate('Signup');
    //   }
    // } catch (e) {
    //   // error reading value
    //   console.error('This is an error', e);

    // }
  }

  render () {

    const mySlideInDown = {
      from: {
        translateY: 30,
      },
      to: {
        translateY: 0,
      },
    };

    Animatable.initializeRegistryWithDefinitions({
    mySlideInDown,
    });

    const { viewStyle, ImageStyle } = styles;

    return (
      <>
        <StatusBar
          backgroundColor="transparent"
          hidden={true} translucent={false}
          barStyle="default"
        />
        <View
          style={viewStyle}>
          <Animatable.View
            animation="mySlideInDown"
            iterationCount={5}
            onAnimationEnd={this.isFirstTimeUser}
            direction="alternate">
            <Image
              source={require('../../assets/images/iwrite_logo.png')}
              style={[ImageStyle]}
            />
          </Animatable.View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F3F6',
  },
  ImageStyle: {
    width: wp(50),
    height: hp(11),
    resizeMode: 'contain',
    alignSelf: 'center',
    // bottom: hp(3),
  },
});
