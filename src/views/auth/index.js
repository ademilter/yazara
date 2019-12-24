import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from '../../utils/theme'

import SignUpScreen from './signUp'
import SignInScreen from './signIn'

export default createStackNavigator(
  {
    SignIn: SignInScreen,
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
