import React, { useState, useEffect, createRef } from 'react'
import { inject, observer } from 'mobx-react'
import { Animated, Keyboard } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import format from 'date-fns/format'

import Calendar from './calendar-expandable'
import List from './list'

import View from '../../components/view'
import Page from '../../components/page'
import Text from '../../components/text'
import Icon from '../../components/icon'
import Button from '../../components/button'
import { size, colors } from '../../utils/theme'
import Input from '../../components/input'
import ButtonIcon from '../../components/button-icon'

function Index({ navigation }) {
  const today = format(new Date(), 'yyyy-MM-dd')
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedMont, setSelectedMont] = useState([
    format(startOfMonth(new Date()), 'yyyy-MM-dd'),
    format(endOfMonth(new Date()), 'yyyy-MM-dd')
  ])

  const [text, setText] = useState('')
  const input = createRef()
  const formHeight = size.finger + 16 + 16 // input-height + paddingTop + paddingBottom
  const [keyboardHeight, setKeyboardHeight] = useState(-formHeight)
  const [isKeyboardShow, setKeyboardShow] = useState(false)

  useEffect(() => {
    setSelectedMont([
      format(startOfMonth(new Date(selectedDate)), 'yyyy-MM-dd'),
      format(endOfMonth(new Date(selectedDate)), 'yyyy-MM-dd')
    ])
    navigation.setParams({ selectedDate })
  }, [selectedDate])

  useEffect(() => {
    // Animated.timing(keyboardHeight, {
    //   toValue: -formHeight,
    //   duration: 0
    // }).start()

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
    console.log('onKeyboardDidShow')
    setKeyboardShow(true)
    setKeyboardHeight(e.endCoordinates.height)
    // Animated.timing(keyboardHeight, {
    //   toValue: e.endCoordinates.height,
    //   duration: 230
    // }).start()
  }

  const onKeyboardDidHide = () => {
    console.log('onKeyboardDidHide')
    setKeyboardShow(false)
    setKeyboardHeight(-formHeight)
    // Animated.timing(keyboardHeight, {
    //   toValue: -formHeight,
    //   duration: 50
    // }).start()
  }

  const onCancel = () => {
    Keyboard.dismiss()
  }

  const onChangeDate = date => {
    console.log('onChangeDate', date)
    setSelectedDate(date)
  }

  const { data, error, loading } = useQuery(
    gql`
      query logs($startDate: date!, $endDate: date!) {
        logs(where: { created_at: { _gte: $startDate, _lte: $endDate } }) {
          id
          text
          created_at
        }
      }
    `,
    {
      variables: {
        startDate: selectedMont[0],
        endDate: selectedMont[1]
      },
      onCompleted: a => {
        console.log(a)
      }
    }
  )

  return (
    <Page>
      <Calendar
        data={data}
        loading={loading}
        selectedDate={selectedDate}
        onChangeDate={onChangeDate}
      >
        <View flex={1} borderTopWidth={1} borderTopColor="dark4">
          <List
            selectedDate={selectedDate}
            data={data}
            error={error}
            loading={loading}
          />
        </View>
      </Calendar>

      {/* add button */}

      {!isKeyboardShow && (
        <View position="absolute" zIndex={100} right={24} bottom={24}>
          <ButtonIcon
            borderRadius="max"
            size="large"
            width="large"
            height="large"
            onPress={() => {
              input.current.focus()
            }}
          >
            <Icon name="add" />
          </ButtonIcon>
        </View>
      )}

      {/* keyboard close */}

      {isKeyboardShow && (
        <View
          zIndex={100}
          position="absolute"
          left={0}
          top={0}
          width="100%"
          height="100%"
        >
          <Button
            px={0}
            width="100%"
            height="100%"
            onPress={onCancel}
            bg="transparent"
          />
        </View>
      )}

      {/* form */}

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
        <Input
          flex={1}
          ref={input}
          onChangeText={text => setText(text)}
          value={text}
        />
        {/*<ButtonIcon ml={8} bg="green" onPress={onCancel}>*/}
        {/*  <Icon name="check" />*/}
        {/*</ButtonIcon>*/}
      </View>
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
      return <Text fontWeight="bold">{title}</Text>
    }
  }
}

export default inject('store')(observer(Index))
