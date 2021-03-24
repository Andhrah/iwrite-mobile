/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import { Root } from 'native-base';
import Route from './routes';

const App = () => {
  return (
    <Root>
      <Route style={{ flex: 1 }} />
    </Root>
  );
};

export default App;
