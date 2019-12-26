import React from 'react'
import { FlatList } from 'react-native'

import View from '../../components/view'
import Text from '../../components/text'

function List({ selectedDate, data, loading, error }) {
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{error.message}</Text>

  const todayData = data.logs.filter(_ => _.created_at === selectedDate)

  return todayData.length ? (
    <FlatList
      data={todayData}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View py={10}>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  ) : (
    <Text>Kayıt yok.</Text>
  )
}

export default List
