import React from 'react'
import CalendarList from './calendar-list'
import CalendarExpandable from './calendar-expandable'

import View from '../../../components/view'

function Calendar({ data, loading, error, selectedDate, onChangeDate }) {
  return (
    <CalendarExpandable
      data={data}
      loading={loading}
      selectedDate={selectedDate}
      onChangeDate={onChangeDate}
    >
      <View flex={1} borderTopWidth={1} borderTopColor="dark4">
        <CalendarList
          selectedDate={selectedDate}
          data={data}
          error={error}
          loading={loading}
        />
      </View>
    </CalendarExpandable>
  )
}

export default Calendar
