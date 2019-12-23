import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'mobx-react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import store from './src/store'

import InitScreen from './src/views/init'
import AuthStack from './src/views/auth'
import AppStack from './src/views/app'

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Init: InitScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'Init',
      defaultNavigationOptions: {
        header: null
      }
    }
  )
)

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Provider store={store}>
        <AppNavigator theme={store.theme} />
      </Provider>
    </SafeAreaView>
  )
}

export default App
