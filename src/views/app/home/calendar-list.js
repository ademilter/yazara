import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import View from '../../../components/view'
import Text from '../../../components/text'
import Button from '../../../components/button'
import Icon from '../../../components/icon'

function Item({ item }) {
  return (
    <View
      px={24}
      height={40}
      bg="dark6"
      flexDirection="row"
      alignItems="center"
    >
      <Text>{item.text}</Text>
    </View>
  )
}

function CalendarList({ selectedDate, data, loading, error }) {
  if (loading)
    return (
      <View p={24}>
        <Text>Loading...</Text>
      </View>
    )
  if (error)
    return (
      <View p={24}>
        <Text>{error.message}</Text>
      </View>
    )

  const todayData = data.logs.filter(_ => _.created_at === selectedDate)

  return todayData.length ? (
    <SwipeListView
      data={todayData}
      keyExtractor={item => item.id.toString()}
      renderItem={Item}
      renderHiddenItem={(data, rowMap) => (
        <View
          bg="red"
          flexDirection="row"
          justifyContent="flex-end"
          height="100%"
        >
          <Button size="finger" px={0} borderRadius="zero" bg="transparent">
            <Icon name="add" />
          </Button>
        </View>
      )}
      disableRightSwipe
      leftOpenValue={0}
      rightOpenValue={-60}
    />
  ) : (
    <View p={24}>
      <Text>Kayıt yok.</Text>
    </View>
  )
}

export default CalendarList
