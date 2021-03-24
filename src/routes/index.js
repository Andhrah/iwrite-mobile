import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

import AppFirstLaunch from '../components/AppFirstLaunch';
import Onboarding from '../components/onboarding/Onboarding';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';

import Home from '../components/home/Home';
import Search from '../components/home/Home';
import WriteBlog from '../components/blog/WriteBlog';
import Bookmark from '../components/home/Home';
import Account from '../components/home/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, tintColor }) => {
            let IconComponent = Image;
            let iconName, type;
            let imagepath, imageStyle;
            if (route.name === 'Home') {
              type = 'Foundation';
              iconName = 'home';
              return <Icon type={type} name={iconName}  style={{color: color, fontSize: RFPercentage(3.2)}} color={tintColor} />;
            } else if (route.name === 'Search') {
              type = 'EvilIcons';
              iconName = 'search';
              return <Icon type={type} name={iconName}  style={{color: color, fontSize: RFPercentage(3.2)}} color={tintColor} />;
            } else if (route.name === 'WriteBlog') {
              imagepath = require('../../assets/images/writeblog.png');
              imageStyle = {  height: hp(50), width: wp(15), resizeMode: 'contain', bottom: 10 };
            } else if (route.name === 'Bookmark') {
              type = 'Feather';
              iconName = 'bookmark';
              return <Icon type={type} name={iconName}  style={{color: color, fontSize: RFPercentage(3.2)}} color={tintColor} />;
            } else if (route.name === 'Account') {
              type = 'Feather';
              iconName = 'trello';
              return <Icon type={type} name={iconName}  style={{color: color, fontSize: RFPercentage(3.2)}} color={tintColor} />;
            }
            return <IconComponent
            focused={focused}
            source={imagepath}
            style={imageStyle}
          />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#7727FF',
          inactiveTintColor: '#999595',
          style: {
            paddingTop: 0,
            paddingBottom: 5,
            height: hp(8),
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="WriteBlog" component={WriteBlog} options={{ tabBarLabel: ''}} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Account" component={Account} options={{ tabBarLabel: 'Account' }} />
      </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppFirstLaunch"
        headerMode= "none">
        <Stack.Screen name="AppFirstLaunch" component={AppFirstLaunch} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Home" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
