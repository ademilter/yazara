import React from 'react'
// import { SafeAreaView, StatusBar } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { inject, observer } from 'mobx-react'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../home'

const AppStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

function Index({ store }) {
  return (
    <ApolloProvider client={store.client}>
      <AppStack />
    </ApolloProvider>
  )
}

export default inject('store')(observer(Index))
