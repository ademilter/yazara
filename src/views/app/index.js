import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { inject, observer } from 'mobx-react'
import { createStackNavigator } from 'react-navigation-stack'

import defaultNavigationOptions from '../../utils/navigationOptions'
import HomeScreen from './home'

const AppStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions
  }
)

function Index({ navigation, store }) {
  return (
    <ApolloProvider client={store.serviceData}>
      <AppStack navigation={navigation} />
    </ApolloProvider>
  )
}

Index.router = AppStack.router

export default inject('store')(observer(Index))
