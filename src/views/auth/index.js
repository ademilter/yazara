import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import navigationOptions from '../../utils/navigationOptions'

import SignUpScreen from './signup'
import LoginScreen from './login'

export default createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    navigationOptions
  }
)
