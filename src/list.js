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

  console.log(error)

  // useEffect((){
  //
  // }, [selectedDate])

  return data ? (
    <View>
      <FlatList
        data={data.logs}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  ) : error ? (
    <View>
      <Text>Ups errr</Text>
    </View>
  ) : loading ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : (
    <View>
      <Text>Ups</Text>
    </View>
  )
}

export default List
