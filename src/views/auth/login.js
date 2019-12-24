import React from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import Text from '../../components/text'

function Index({ navigation }) {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Button onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </Button>
    </Box>
  )
}

Index.navigationOptions = () => ({
  title: 'Login'
})

export default Index
