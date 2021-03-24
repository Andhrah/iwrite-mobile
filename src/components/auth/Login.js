/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StatusBar, View, Text, TouchableOpacity, StyleSheet, ScrollView,SafeAreaView } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { gql, useMutation } from '@apollo/client';

import ContainerStyle from '../../styles/container';
import ColorStyle from '../../styles/color';
import AppTextStyle from '../../styles/AppText';
import SharedStyle from '../../styles';
import FontStyle from '../../styles/fontSizes';
import { RightLogo, Input, Button } from '../shared';

const Login = props => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [buttonPress, setButtonPress] = useState(false);

  const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        message
        token
      }
    }
  `;
  const [login, { data, loading: mutationLoading, error: mutationError }] = useMutation(LOGIN_USER);

  /**
   * This function handles the onsubmit event. It triggers validation and sends data to the API
  */
  const onSubmit = async () => {
    setButtonPress(true);
    if (!email && !password) {
      setEmailError('Please enter your email.');
      setPasswordError('Please enter your password.');
    }
    if (email === '') {
      setEmailError('Please enter your email.');
    }
    if (password === '') {
      setPasswordError('Please enter your password.');
    }
    else {
      console.log('berfore Done');
      console.log(data);
      console.log(data);
      await login({ variables: { email, password }});
      console.log('berfore Done 2');
      console.log(data);
      // await AsyncStorage.setItem('token', token);
      props.navigation.navigate('Home', {transition:'fadeIn'});
    }
  };

  const {errorTextStyle, container} = styles;

  return (
    <>
      <StatusBar
        backgroundColor="#7727FF"
        hidden={false} translucent={false}
      />

      <SafeAreaView style={[container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[ContainerStyle.appContainer]}>

            <RightLogo />

            <View style={[ContainerStyle.height100, ContainerStyle.justifyCenter, ContainerStyle.alignSelfCenter, {paddingBottom: hp(15)}]}>
              <View style={[ContainerStyle.width80, ContainerStyle.alignSelfCenter]}>

                <Text style={[AppTextStyle.bigText, AppTextStyle.textMarginBottom30]}>Log In</Text>

                {
                  mutationError ? (
                    <Text style={errorTextStyle}>
                      {mutationError.message}
                    </Text>
                  ) : <></>
                }

                <Input
                  value={email}
                  placeholder="Email"
                  type="AntDesign"
                  name="mail"
                  onChangeText={text => {
                    setEmail(text);
                  }}
                />
                {
                  !email && buttonPress ? (
                    <Text style={errorTextStyle}>
                      {emailError}
                    </Text>
                  ) : <></>
                }

                <Input
                  value={password}
                  placeholder="Password"
                  type="AntDesign"
                  name="lock1"
                  secureTextEntry={true}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                />

                {
                  !password && buttonPress ? (
                    <Text style={errorTextStyle}>
                      {passwordError}
                    </Text>
                  ) : <></>
                }

                <TouchableOpacity style={[{alignSelf: 'flex-end'}]}>
                  <Text style={[ColorStyle.purple, {fontWeight: 'bold'}]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>


              <Button
                onPress={onSubmit}
                viewStyle={[ColorStyle.purpleBlackground, ContainerStyle.width70, SharedStyle.marginTopStyle50]}
                buttonTextstyle={[SharedStyle.whiteColor, FontStyle.textFontWeight]}>
                Log In
              </Button>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup', {transition:'fadeIn'})}
                style={[ContainerStyle.alignSelfRight, SharedStyle.marginTopStyle30]}>
                <Text style={[ColorStyle.lightBlack]}>Don't have any account? <Text style={[ColorStyle.purple, FontStyle.textFontWeight]}>Sign Up</Text></Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorTextStyle: {
    color: '#FF3D00',
    bottom: 12,
    marginLeft: 5,
  },
});
