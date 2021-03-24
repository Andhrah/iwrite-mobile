import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Skip = ({ onPress, children}) => {

  const { iconContainerStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={iconContainerStyle}>
      <Text style={[textStyle]}>Skip</Text>
    </TouchableOpacity>
  );
};

export { Skip };

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
  textStyle: {
    color: '#7727FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
