import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import RegisterScreen from './register'
import LoginScreen from './login'

export default createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: '#555'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // fontWeight: 'bold'
      }
    }
  }
)
