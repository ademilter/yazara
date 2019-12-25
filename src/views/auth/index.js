import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from '../../utils/theme'

import SignUpScreen from './signup'
import LoginScreen from './login'

export default createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.dark6,
        borderBottomColor: colors.dark3
      },
      headerTintColor: colors.blue,
      headerTitleStyle: {
        // fontWeight: 'bold'
        color: 'white'
      }
    }
  }
)
