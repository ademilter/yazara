import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
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
import Link from '../../components/link'
import Icon from '../../components/icon'

function Index({ navigation }) {
  const today = format(new Date(), 'yyyy-MM-dd')
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedMont, setSelectedMont] = useState([
    format(startOfMonth(new Date()), 'yyyy-MM-dd'),
    format(endOfMonth(new Date()), 'yyyy-MM-dd')
  ])

  useEffect(() => {
    setSelectedMont([
      format(startOfMonth(new Date(selectedDate)), 'yyyy-MM-dd'),
      format(endOfMonth(new Date(selectedDate)), 'yyyy-MM-dd')
    ])
    navigation.setParams({ selectedDate })
  }, [selectedDate])

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
        <View flex={1} p={24} borderTopWidth={1} borderTopColor="dark5">
          <List
            selectedDate={selectedDate}
            data={data}
            error={error}
            loading={loading}
          />
        </View>
      </Calendar>
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
