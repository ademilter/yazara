import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

console.disableYellowBox = true

import theme from './utils/theme'
import store from './store'

import InitScreen from './views/init'
import AuthStack from './views/auth'
import AppStack from './views/app'

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
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.dark6}
      />
      <Provider store={store}>
        <AppNavigator theme={store.theme} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
