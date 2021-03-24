import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Button = ({ children, onPress, style, disabled, buttonTextstyle, viewStyle }) => {
  const { buttonStyle, textstyle, buttonViewStyle } = styles;
  return (
    <View style={[buttonViewStyle, viewStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[buttonStyle, style]}
        disabled={disabled}
        >
        <Text style={[textstyle, buttonTextstyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 55,
    width: wp(80),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 0.5,
      },
    }),
  },
  textstyle: {
    fontSize: RFPercentage(2.6),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  buttonViewStyle: {
    borderRadius: 50,
  },
});

export { Button };
