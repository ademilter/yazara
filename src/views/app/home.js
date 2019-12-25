import React, { useState } from 'react'
import format from 'date-fns/format'
import { inject, observer } from 'mobx-react'

import Calendar from './calendar'
import List from './list'

import View from '../../components/view'
import Page from '../../components/page'
import { colors } from '../../utils/theme'

function Index() {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  )

  const changeDate = date => {
    console.log('change date', date)
    setSelectedDate(date.dateString)
  }

  return (
    <Page>
      <Calendar selectedDate={selectedDate} changeDate={changeDate} />
      <View flex={1} p={24} borderTopWidth={1} borderTopColor="dark4">
        <List selectedDate={selectedDate} />
      </View>
    </Page>
  )
}

Index.navigationOptions = () => ({
  // TODO: "yyyy MM" formatında tarih gelecek
  title: 'Kasım',
  headerStyle: {
    backgroundColor: colors.dark6,
    borderBottomColor: colors.dark6
  }
})

export default inject('store')(observer(Index))
