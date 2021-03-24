import React from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import ContainerStyle from '../../styles/container';
import ColorStyle from '../../styles/color';
import AppTextStyle from '../../styles/AppText';
import SharedStyle from '../../styles';
import FontStyle from '../../styles/fontSizes';
import { RightLogo, Input, Button } from '../shared';

const Signup = props => {
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

            <Text style={[AppTextStyle.bigText, AppTextStyle.textMarginBottom30]}>Sign Up</Text>
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
