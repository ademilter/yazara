import React from 'react'
import { View, Text, Button } from 'react-native'

function Index({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
      }}
    >
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

Index.navigationOptions = () => ({
  title: 'Register'
})

export default Index
