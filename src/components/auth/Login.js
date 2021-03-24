import React from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ContainerStyle from '../../styles/container';
import ColorStyle from '../../styles/color';
import AppTextStyle from '../../styles/AppText';
import SharedStyle from '../../styles';
import FontStyle from '../../styles/fontSizes';
import { RightLogo, Input, Button } from '../shared';

const Login = props => {
  return (
    <>
      <StatusBar
        backgroundColor="#7727FF"
        hidden={false} translucent={false}
        // barStyle="light-content"
      />

      <View style={[ContainerStyle.appContainer]}>

        <RightLogo />

        <View style={[ContainerStyle.height100, ContainerStyle.justifyCenter, ContainerStyle.alignSelfCenter, {paddingBottom: hp(15)}]}>
          <View style={[ContainerStyle.width80, ContainerStyle.alignSelfCenter]}>

            <Text style={[AppTextStyle.bigText, AppTextStyle.textMarginBottom30]}>Log In</Text>
            <Input
              placeholder="Email"
              type="AntDesign"
              name="mail"
            />

            <Input
              placeholder="Password"
              type="AntDesign"
              name="lock1"
            />
          </View>

          <Button
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
    </>
  );
};

export default Login;
