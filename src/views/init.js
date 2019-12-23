import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { View, ActivityIndicator } from 'react-native'

function Index({ navigation, store }) {
  useEffect(() => {
    ;(async () => {
      await store.getData()
      navigation.navigate(store.token ? 'Home' : 'Register')
    })()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="red" />
    </View>
  )
}

export default inject('store')(observer(Index))
