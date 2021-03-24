import React, { useState} from 'react';
import { StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ContainerStyle from '../../styles/container';
import ColorStyle from '../../styles/color';
import AppTextStyle from '../../styles/AppText';
import SharedStyle from '../../styles';
import FontStyle from '../../styles/fontSizes';
import { RightLogo, Input, Button } from '../shared';

const Signup = props => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonPress, setButtonPress] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const REGISTER_USER = gql`
    mutation Register($email: String!, $password: String!) {
      register(email: $email, password: $password) {
        message
        token
      }
    }
  `;
  const [register, { data, loading: mutationLoading, error: mutationError }] = useMutation(REGISTER_USER);

  /**
   * This function handles the onsubmit event. It triggers validation and sends data to the API
  */
  const onSumbit = async () => {
    setButtonPress(true);
    if (!email && !password) {
      setEmailError('Please enter your email.');
      setPasswordError('Please enter your password.');
    } else if (email === '') {
      setEmailError('Please enter your email.');
    } else if (password === '') {
      setPasswordError('Please enter your password.');
    } else if (password && password.length < 8 && !confirmPasswordError === '') {
      setConfirmPasswordError('Please confirm password.');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Password does not match');
    } else {
      await register({ variables: { email, password }});
      // await AsyncStorage.setItem('token', token);
      props.navigation.navigate('Home', {transition:'fadeIn'});
    }
  };

  const {errorTextStyle} = styles;
  return (
    <>
      <StatusBar
        backgroundColor="#7727FF"
        hidden={false} translucent={false}
      />

      <View style={[ContainerStyle.appContainer]}>

        <RightLogo />

        <View style={[ContainerStyle.height100, ContainerStyle.justifyCenter, ContainerStyle.alignSelfCenter, {paddingBottom: hp(15)}]}>
          <View style={[ContainerStyle.width80, ContainerStyle.alignSelfCenter]}>

            <Text style={[AppTextStyle.bigText, AppTextStyle.textMarginBottom30]}>Sign Up</Text>

            {
              data && data.register.message ? (
                // console.log(mutationError)
                <Text style={errorTextStyle}>
                  {data.register.message}
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

            <Input
              value={confirmPassword}
              placeholder="Confirm Password"
              type="AntDesign"
              name="lock1"
              secureTextEntry={true}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
            />

            {
              !confirmPasswordError && buttonPress ? (
                <Text style={errorTextStyle}>
                  {confirmPasswordError}
                </Text>
              ) : <></>
            }

            {
              confirmPassword !== password && buttonPress ? (
                <Text style={errorTextStyle}>
                  Password doees not match
                </Text>
              ) : <></>
            }

          </View>

          <Button
            onPress={onSumbit}
            viewStyle={[ColorStyle.purpleBlackground, ContainerStyle.width70, SharedStyle.marginTopStyle50]}
            buttonTextstyle={[SharedStyle.whiteColor, FontStyle.textFontWeight]}>
            Sign Up
          </Button>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login', {transition:'fadeIn'})}
            style={[ContainerStyle.alignSelfRight, SharedStyle.marginTopStyle30]}>
            <Text style={[ColorStyle.lightBlack]}>Already have an account? <Text style={[ColorStyle.purple, FontStyle.textFontWeight]}>Log in</Text></Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  errorTextStyle: {
    color: '#FF3D00',
    bottom: 12,
    marginLeft: 5,
  },
});
