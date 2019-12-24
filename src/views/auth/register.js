import React from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import Text from '../../components/text'

function Index({ navigation }) {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Button onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button>
    </Box>
  )
}

Index.navigationOptions = () => ({
  title: 'Register'
})

export default Index
