import React from 'react';

import Home from 'pages/appscreen/home';
import Login from 'pages/appscreen/login';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const AppNav = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
       headerShown:false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Application = createAppContainer(
  createSwitchNavigator(
    {
    Auth: Login,
    App: AppNav,
  },
  {
      initialRouteName:'Auth'
  },
  ),
);
export default Application