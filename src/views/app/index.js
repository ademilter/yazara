import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { inject, observer } from 'mobx-react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import HomeScreen from './home'
import { colors } from '../../utils/theme'

const AppStack = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen
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
)

function Index({ store }) {
  return (
    <ApolloProvider client={store.serviceData}>
      <AppStack />
    </ApolloProvider>
  )
}

export default inject('store')(observer(Index))
