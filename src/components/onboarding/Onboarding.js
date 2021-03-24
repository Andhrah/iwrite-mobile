import React, {Component} from 'react';
import { StatusBar, View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Skip } from '../shared';

import AppTextStyle from '../../styles/AppText';
import sharedStyles from '../../styles';
import containerStyle from '../../styles/container';
import ColorStyle from '../../styles/color';

export default class Onboarding extends Component {

  signupPage = () =>
    this.props.navigation.navigate('Signup', {transition:'fadeIn'});

  render() {
    const { dotStyle, activeDotStyle, textContainerStyle, buttonContainerStyle, subTextContainer, imageStyle } = styles;
    return (
      <>
        <StatusBar
          backgroundColor="#7727FF"
          hidden={true} translucent={false}
          barStyle="light-content"
        />

        <View style={[containerStyle.appContainer, sharedStyles.paddingBottomStyle50]}>
          <Swiper
            removeClippedSubviews={false}
            showsButtons={false}
            showsPagination={true}
            activeDotColor="#7727FF"
            dotStyle={dotStyle}
            // height={10}
            // paginationStyle={{top: 10}}
            activeDotStyle={activeDotStyle}
            dotColor="#BBC1E2"
            // style={{height: '75%'}}
            // containerStyle={{top: 0, bottom: 0}}
            loop={false}>

            {/* ===================================== */}
            {/* ==============     1      =========== */}
            {/* ===================================== */}

            <View>
              <Image
                source={require('../../../assets/images/blogging.png')}
                style={[imageStyle]}
              />
              <View
                style={[sharedStyles.paddingHorizontal30, sharedStyles.marginBottom10]}>
                <Text
                style={[AppTextStyle.bigText]}
                >Grow Your Ideas</Text>
              </View>

              <View style={[sharedStyles.paddingHorizontal30, subTextContainer]}>
                <Text style={[ColorStyle.gray]}>
                  Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut diam. Adipiscing diam donec adipiscing tristique risus.
                </Text>
              </View>
            </View>

            {/* ===================================== */}
            {/* ==============     2      =========== */}
            {/* ===================================== */}

            <View>
              <Image
                source={require('../../../assets/images/blogpost.png')}
                style={[imageStyle]}
              />
              <View
                style={[sharedStyles.paddingHorizontal30, sharedStyles.marginBottom10]}>
                <Text
                style={[AppTextStyle.bigText]}
                >Explore</Text>
              </View>

              <View style={[sharedStyles.paddingHorizontal30, subTextContainer]}>
                <Text style={[ColorStyle.gray]}>
                  Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut diam. Adipiscing diam donec adipiscing tristique risus.
                </Text>
              </View>
            </View>

            {/* ===================================== */}
            {/* ==============     3      =========== */}
            {/* ===================================== */}

            <View>
              <Image
                source={require('../../../assets/images/inspiration_blog.png')}
                style={[imageStyle]}
              />
              <View
                style={[sharedStyles.paddingHorizontal30, sharedStyles.marginBottom10]}>
                <Text
                style={[AppTextStyle.bigText]}
                >Inspiration</Text>
              </View>

              <View style={[sharedStyles.paddingHorizontal30, subTextContainer]}>
                <Text style={[ColorStyle.gray]}>
                  Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut diam. Adipiscing diam donec adipiscing tristique risus.
                </Text>
              </View>
            </View>
          </Swiper>
          <Skip
           onPress={() => this.signupPage()}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  dotStyle: {
    // marginBottom:  Platform.OS === 'ios' ? hp(10) : hp(10),
    marginRight: 10,
    color: '#FFFFFF',
  },
  activeDotStyle: {
    // marginBottom:  Platform.OS === 'ios' ? hp(10) : hp(10),
    marginRight: 10,
  },
  viewStyle: {
    // marginBottom: Platform.OS === 'ios' ? 60 : 30, height: 60,
  },
  buttonContainerStyle: {
    bottom: 50,
    alignItems: 'center',
  },
  imageStyle: {
    height: hp(50),
    width:'100%',
    resizeMode: 'contain',
  },
  subTextContainer: {
    alignSelf: 'flex-end',
    marginLeft: 50,
  },
});
