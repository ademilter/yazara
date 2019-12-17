import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Agenda } from 'react-native-calendars'

function Index({ changeDate }) {
  return (
    <Agenda
      items={{
        '2019-12-01': [{ text: 'item 1 - any js object' }],
        '2019-12-10': [{ text: 'item 1 - any js object' }],
        '2019-12-17': [{ text: 'item 1 - any js object' }],
        '2019-12-18': [{ text: 'item 2 - any js object' }],
        '2019-12-19': [],
        '2019-12-20': [
          { text: 'item 3 - any js object' },
          { text: 'any js object' }
        ]
      }}
      markedDates={{
        '2019-12-16': { marked: true },
        '2019-12-17': { marked: true }
      }}
      renderItem={item => {
        return (
          <View>
            <Text>{item.text}</Text>
          </View>
        )
      }}
      renderEmptyDate={() => {
        return (
          <View>
            <Text>This is empty date!</Text>
          </View>
        )
      }}
      rowHasChanged={(r1, r2) => {
        return r1.name !== r2.name
      }}
      onDayPress={changeDate}
      onDayChange={changeDate}
      // loadItemsForMonth={month => {
      //   console.log('trigger items loading', month)
      // }}
    />
  )
}

export default Index
