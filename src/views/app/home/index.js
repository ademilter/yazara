import React, { useRef, useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Keyboard } from 'react-native'
import { useMutation, useQuery } from '@apollo/react-hooks'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import format from 'date-fns/format'

import { FETCH_LOG, INSERT_LOG } from '../../../utils/graph-queries'
import Calendar from './calendar'

import Page from '../../../components/page'
import Text from '../../../components/text'
import { colors, size } from '../../../utils/theme'
import KeyboardCloseButton from './keyboard-close-button'
import AddButton from './add-button'
import CreateFrom from './create-form'

function Index({ navigation, store }) {
  const today = format(new Date(), 'yyyy-MM-dd')
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedMont, setSelectedMont] = useState([
    format(startOfMonth(new Date()), 'yyyy-MM-dd'),
    format(endOfMonth(new Date()), 'yyyy-MM-dd')
  ])
  const inputRef = useRef(null)
  const formHeight = size.finger + 16 + 16 // input-height + paddingTop + paddingBottom
  const [keyboardHeight, setKeyboardHeight] = useState(-formHeight)
  const [isKeyboardShow, setKeyboardShow] = useState(false)

  const [insertLog] = useMutation(INSERT_LOG)
  const fetchLog = useQuery(FETCH_LOG, {
    variables: {
      startDate: selectedMont[0],
      endDate: selectedMont[1]
    }
  })

  useEffect(() => {
    setSelectedMont([
      format(startOfMonth(new Date(selectedDate)), 'yyyy-MM-dd'),
      format(endOfMonth(new Date(selectedDate)), 'yyyy-MM-dd')
    ])
    navigation.setParams({ selectedDate })
  }, [selectedDate])

  useEffect(() => {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      onKeyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      onKeyboardDidHide
    )
    return () => {
      this.keyboardDidShowListener.remove()
      this.keyboardDidHideListener.remove()
    }
  }, [])

  const onKeyboardDidShow = e => {
    setKeyboardShow(true)
    setKeyboardHeight(e.endCoordinates.height)
  }

  const onKeyboardDidHide = () => {
    setKeyboardShow(false)
    setKeyboardHeight(-formHeight)
  }

  const onCancel = () => {
    Keyboard.dismiss()
  }

  const onChangeDate = date => {
    setSelectedDate(date)
  }

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      console.log({ text: values.text, user_id: store.user.id })
      const response = await insertLog({
        variables: { text: values.text, user_id: store.user.id }
      })
      fetchLog.refetch()
      console.log(response)
      values.text = ''
    } catch (e) {
      console.log(e)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Page>
      <Calendar
        data={fetchLog.data}
        loading={fetchLog.loading}
        error={fetchLog.error}
        selectedDate={selectedDate}
        onChangeDate={onChangeDate}
      />

      {/* add button */}
      {!isKeyboardShow && (
        <AddButton
          onPress={() => {
            inputRef.current.focus()
          }}
        />
      )}

      {/* form */}
      {isKeyboardShow && <KeyboardCloseButton onPress={onCancel} />}
      <CreateFrom
        ref={inputRef}
        keyboardHeight={keyboardHeight}
        onSubmit={onSubmit}
      />
    </Page>
  )
}

Index.navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: colors.dark6,
      borderBottomColor: colors.dark6
    },
    headerTitle: () => {
      const selectedDate = navigation.getParam('selectedDate', null)
      const title = format(new Date(selectedDate), 'MMMM yyyy')
      return <Text>{title}</Text>
    }
  }
}

export default inject('store')(observer(Index))
