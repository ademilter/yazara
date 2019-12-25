import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import defaultNavigationOptions from '../../utils/navigationOptions'

import SignUpScreen from './signup'
import LoginScreen from './login'

export default createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    defaultNavigationOptions
  }
)
