import React, { useState } from 'react'
import format from 'date-fns/format'
import { inject, observer } from 'mobx-react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'

import Calendar from './calendar'
import List from './list'

import View from '../../components/view'
import Page from '../../components/page'
import { colors } from '../../utils/theme'

function Index() {
  const today = new Date()

  const [selectedDate, setSelectedDate] = useState(format(today, 'yyyy-MM-dd'))

  const onChangeDate = date => {
    setSelectedDate(date.dateString)
  }

  const [selectedMont, setSelectedMont] = useState({
    startDate: format(startOfMonth(today), 'yyyy-MM-dd'),
    endDate: format(endOfMonth(today), 'yyyy-MM-dd')
  })

  const onMonthChange = dates => {
    console.log(dates)
    if (dates.length > 1) return
    const date = dates[0].dateString
    const startDate = format(startOfMonth(new Date(date)), 'yyyy-MM-dd')
    const endDate = format(endOfMonth(new Date(date)), 'yyyy-MM-dd')
    setSelectedDate(startDate)
    setSelectedMont({ startDate, endDate })
  }

  const FETCH_LOGS = gql`
    query logs($startDate: date!, $endDate: date!) {
      logs(where: { created_at: { _gte: $startDate, _lte: $endDate } }) {
        id
        text
        created_at
      }
    }
  `

  const { data, error, loading } = useQuery(FETCH_LOGS, {
    variables: {
      startDate: selectedMont.startDate,
      endDate: selectedMont.endDate
    },
    onCompleted: data => {
      console.log('onCompleted', data)
    }
  })

  return (
    <Page>
      <Calendar
        data={data}
        loading={loading}
        selectedDate={selectedDate}
        onChangeDate={onChangeDate}
        onMonthChange={onMonthChange}
      />
      <View flex={1} p={24} borderTopWidth={1} borderTopColor="dark4">
        <List
          selectedDate={selectedDate}
          data={data}
          error={error}
          loading={loading}
        />
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
