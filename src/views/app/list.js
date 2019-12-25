import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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

  return (
    <View style={{ flex: 1, padding: 30, backgroundColor: '#222' }}>
      {data ? (
        <View style={{ flex: 1 }}>
          {data.logs.length ? (
            <FlatList
              data={data.logs}
              renderItem={({ item }) => (
                <View style={{ paddingVertical: 10 }}>
                  <Text style={{ color: 'white6' }}>{item.text}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={{ color: 'white6' }}>Boş</Text>
          )}
        </View>
      ) : error ? (
        <View>
          {error.graphQLErrors.map(({ message }, i) => (
            <Text key={i} style={{ color: 'white6' }}>
              {message}
            </Text>
          ))}
        </View>
      ) : (
        loading && (
          <View>
            <Text style={{ color: 'white6' }}>Loading</Text>
          </View>
        )
      )}
    </View>
  )
}

export default List
