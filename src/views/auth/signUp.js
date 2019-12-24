import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import View from '../../components/view'
import Button from '../../components/button'
import Text from '../../components/text'
import Input from '../../components/input'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(128, 'Too Long!')
    .required('Required')
})

function Index({ navigation, store }) {
  return (
    <Formik
      initialValues={{
        email: 'ademilter@gmail.com',
        password: '123456'
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await store.signUp(values)
          navigation.navigate('Terminal')
        } catch (e) {
          console.log(e)
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <View flex={1} alignItems="center" p={32} bg="dark6">
          <View width={1} mb={24}>
            <Input
              autoFocus={true}
              defaultValue={values.email}
              placeholder="Email address"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
            />
          </View>
          <View width={1} mb={24}>
            <Input
              placeholder="Password"
              defaultValue={values.password}
              keyboardType="default"
              secureTextEntry={true}
              returnKeyType="send"
              onChangeText={handleChange('password')}
            />
          </View>
          <View width={1} mb={24}>
            {isSubmitting ? (
              <Text>Loading...</Text>
            ) : (
              <Button onPress={handleSubmit}>
                <Text>Sign up</Text>
              </Button>
            )}
          </View>
        </View>
      )}
    </Formik>
  )
}

Index.navigationOptions = () => ({
  title: 'Sign up'
})

export default Index