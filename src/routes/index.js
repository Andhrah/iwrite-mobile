import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppFirstLaunch from '../components/AppFirstLaunch';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        headerMode= "none">
        <Stack.Screen name="AppFirstLaunch" component={AppFirstLaunch} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
