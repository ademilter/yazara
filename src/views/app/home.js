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
import Icon from '../../components/icon'
import Button from '../../components/button'
import { colors } from '../../utils/theme'

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
        <View flex={1} borderTopWidth={1} borderTopColor="dark4">
          <List
            selectedDate={selectedDate}
            data={data}
            error={error}
            loading={loading}
          />
        </View>
      </Calendar>
      <View position="absolute" right={24} bottom={24}>
        <Button
          borderRadius="max"
          px={0}
          width="large"
          height="large"
          onPress={() => {}}
        >
          <Icon name="add" />
        </Button>
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
    // headerLeft: () => (
    //   <Link px={24} py={4} onPress={() => {}}>
    //     <Icon name="search" />
    //   </Link>
    // ),
    headerTitle: () => {
      const selectedDate = navigation.getParam('selectedDate', null)
      const title = format(new Date(selectedDate), 'MMMM yyyy')
      return <Text fontWeight="bold">{title}</Text>
    }
    // headerRight: () => (
    //   <Link px={24} py={4} onPress={() => {}}>
    //     <Icon name="add" />
    //   </Link>
    // )
  }
}

export default inject('store')(observer(Index))
