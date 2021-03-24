import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RightLogo = ({ onPress, children}) => {

  const { iconContainerStyle, imageStyle } = styles;
  return (
    <View
      onPress={onPress}
      style={iconContainerStyle}>
      <Image
        source={require('../../../assets/images/iwrite_logo.png')}
        style={[imageStyle]}
      />
    </View>
  );
};

export { RightLogo };

const styles = StyleSheet.create({
  iconContainerStyle: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 40,
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
  },
  imageStyle: {
    width: wp(20),
    height: hp(5),
    resizeMode: 'contain',
  },
});
