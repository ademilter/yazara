import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import format from 'date-fns/format'

import Calendar from './calendar'
import List from './list'

import View from '../../components/view'
import Page from '../../components/page'
import Text from '../../components/text'
import Link from '../../components/link'
import Icon from '../../components/icon'

function Index({ navigation }) {
  const today = format(new Date(), 'yyyy-MM-dd')
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedMont, setSelectedMont] = useState({
    startDate: format(startOfMonth(new Date()), 'yyyy-MM-dd'),
    endDate: format(endOfMonth(new Date()), 'yyyy-MM-dd')
  })

  useEffect(() => {
    navigation.setParams({ selectedDate: selectedMont.startDate })
  }, [selectedMont])

  const onChangeDate = date => {
    setSelectedDate(date.dateString)
  }

  const onMonthChange = dates => {
    if (dates.length > 1) return
    const date = dates[0].dateString
    const startDate = format(startOfMonth(new Date(date)), 'yyyy-MM-dd')
    const endDate = format(endOfMonth(new Date(date)), 'yyyy-MM-dd')
    setSelectedMont({ startDate, endDate })
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
        startDate: selectedMont.startDate,
        endDate: selectedMont.endDate
      }
    }
  )

  return (
    <Page>
      <Calendar
        today={today}
        data={data}
        loading={loading}
        selectedDate={selectedDate}
        onChangeDate={onChangeDate}
        onMonthChange={onMonthChange}
      />
      <View flex={1} p={24} borderTopWidth={1} borderTopColor="dark5">
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

Index.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <Link px={24} py={4} onPress={() => {}}>
        <Icon name="search" />
      </Link>
    ),
    headerTitle: () => {
      const selectedDate = navigation.getParam('selectedDate', null)
      const title = format(new Date(selectedDate), 'MMMM yyyy')
      return <Text>{title}</Text>
    },
    headerRight: () => (
      <Link px={24} py={4} onPress={() => {}}>
        <Icon name="add" />
      </Link>
    )
  }
}

export default inject('store')(observer(Index))
