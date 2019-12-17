import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, ActivityIndicator } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import AsyncStorage from '@react-native-community/async-storage'
import makeApolloClient from './src/utils/apollo'
import Home from './src/home'

function App() {
  const [client, setClient] = useState()

  const init = async () => {
    try {
      let data = {}
      const rawData = await AsyncStorage.getItem('@store')
      if (rawData) data = JSON.parse(rawData)
      console.log(data)
      const client = makeApolloClient('145323')
      setClient(client)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {client ? (
        <ApolloProvider client={client}>
          <Home />
        </ApolloProvider>
      ) : (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </SafeAreaView>
  )
}

export default App
