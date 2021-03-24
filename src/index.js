/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import { Root } from 'native-base';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Route from './routes';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://iwrite-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Root>
      <ApolloProvider client={client}>
        <Route style={{ flex: 1 }} />
      </ApolloProvider>
    </Root>
  );
};

export default App;
