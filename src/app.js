import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import theme from './utils/theme'
import store from './store'

import InitScreen from './views/init'
import AuthStack from './views/auth'
import AppStack from './views/app'
import Box from './components/box'

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
      <Box as={SafeAreaView} flex={1} bg="black">
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Provider store={store}>
          <AppNavigator theme={store.theme} />
        </Provider>
      </Box>
    </ThemeProvider>
  )
}

export default App
