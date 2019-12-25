import React from 'react'
import { FlatList } from 'react-native'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import View from '../../components/view'
import Text from '../../components/text'

function List({ selectedDate }) {
  const FETCH_LOGS = gql`
    query logs($date: date!) {
      logs(where: { created_at: { _eq: $date } }) {
        id
        text
        created_at
      }
    }
  `

  const { data, error, loading } = useQuery(FETCH_LOGS, {
    variables: {
      date: selectedDate
    }
  })

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{error.message}</Text>

  return data.logs.length ? (
    <FlatList
      data={data.logs}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View py={10}>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  ) : (
    <Text>Boş</Text>
  )
}

export default List
