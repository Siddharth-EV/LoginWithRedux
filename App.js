/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from 'redux-store/store';
import Application from 'pages/appscreen'


const App = () => {
  return (
    <Provider store={store}>
    <Application/>
    </Provider>
  );
};


export default App;
