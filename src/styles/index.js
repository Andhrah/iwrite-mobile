import { StyleSheet, Platform } from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  centerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginTopStyle0: {
    marginTop: 0,
  },
  marginTopStyle10: {
    marginTop: 10,
  },
  marginTopStyle15: {
    marginTop: 15,
  },
  marginTopStyle20: {
    marginTop: 20,
  },
  marginTopStyle30: {
    marginTop: 30,
  },
  marginTopStyle40: {
    marginTop: 40,
  },
  marginTopStyle50: {
    marginTop: 50,
  },
  marginTopStyle90: {
    marginTop: 90,
  },
  marginTopStyleflex: {
    marginTop: Platform.OS === 'ios' ? hp(17.9) : hp(16.3),
  },
  paddingTopStyle: {
    paddingTop: 80,
  },
  paddingBottomStyle: {
    paddingBottom: 10,
  },
  paddingBottomStyle50: {
    paddingBottom: 50,
  },
  whiteColor: {
    color: '#FFFFFF',
  },
  fontSizeStyle: {
    fontSize: RFPercentage(2.6),
  },
  marginBottomStyle: {
    marginBottom: 40,
  },
  blueBackground: {
    backgroundColor: '#2033A0',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  centerPosition: {
    alignItems: 'center',
  },
  lightGrayBackground: {
    backgroundColor: '#EFF2F7',
  },
  middlePosition: {
    justifyContent: 'center',
  },
  marginBottom5: {
    marginBottom: 5,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  marginBottom40: {
    marginBottom: 40,
  },
  marginBottom50: {
    marginBottom: 50,
  },
  marginBottom60: {
    marginBottom: 60,
  },
  borderRadius: {
    borderRadius: 5,
  },
  borderRadius10: {
    borderRadius: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingHorizontal30: {
    paddingHorizontal: 30,
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  top15: {
    // top: 15,
  },
  marginRight30: {
    marginRight: 30,
  },
  marginRight20: {
    marginRight: 20,
  },
  marginRight10: {
    marginRight: 10,
  },
  marginRight5: {
    marginRight: 5,
  },

  marginLeft10: {
    marginLeft: 10,
  },
  marginLeft20: {
    marginLeft: 20,
  },
});
