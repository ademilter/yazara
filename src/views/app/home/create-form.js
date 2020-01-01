import React, { forwardRef } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import View from '../../../components/view'
import Input from '../../../components/input'

const CreateSchema = Yup.object().shape({
  text: Yup.string().required('Required')
})

const CreateFrom = forwardRef(
  ({ keyboardHeight, onSubmit = () => {} }, ref) => {
    return (
      <View
        position="absolute"
        left={0}
        bottom={keyboardHeight}
        flexDirection="row"
        alignItems="center"
        p={16}
        width={1}
        bg="dark4"
      >
        <Formik
          initialValues={{ text: '' }}
          validationSchema={CreateSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Input
              flex={1}
              ref={ref}
              keyboardType="default"
              returnKeyType="done"
              value={values.text}
              onChangeText={handleChange('text')}
              onSubmitEditing={handleSubmit}
            />
          )}
        </Formik>
      </View>
    )
  }
)

export default CreateFrom
