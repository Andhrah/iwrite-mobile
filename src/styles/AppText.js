import { StyleSheet } from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  bigText: {
    fontSize: RFPercentage(3.4),
    color: '#7727FF',
    fontWeight: '700',
    // marginTop: 50,
    marginBottom: 7,
  },
  smallText: {
    textAlign: 'center',
    color: '#8A90A8',
    fontWeight: '400',
    fontSize: RFPercentage(2.6),
  },
  blueSmallText: {
    color: '#2033A0',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: RFPercentage(2.1),
  },
  textMarginBottom5: {
    marginBottom: 5,
  },
  textMarginBottom: {
    marginBottom: 10,
  },
  textMarginBottom15: {
    marginBottom: 15,
  },
  textMarginBottom20: {
    marginBottom: 20,
  },
  textMarginBottom30: {
    marginBottom: 30,
  },
  textAlign: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
});
