import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { View, ActivityIndicator } from 'react-native'
import { sleep } from '../utils/sleep'

function Index({ navigation, store }) {
  useEffect(() => {
    ;(async () => {
      await sleep()
      await store.getData()
      navigation.navigate(store.token ? 'Home' : 'Register')
    })()
  }, [])

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator color="white" />
    </View>
  )
}

export default inject('store')(observer(Index))
