import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import configureStore from './src/store/configureStore';
import AppNavigator from './src/navigatior';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
