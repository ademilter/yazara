import React, { useState } from 'react'
import { View } from 'react-native'
import format from 'date-fns/format'

import Calendar from './calendar'
import List from './list'

function App() {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  )

  const changeDate = date => {
    setSelectedDate(date.dateString)
  }

  return (
    <View style={{ padding: 30 }}>
      <Calendar selectedDate={selectedDate} changeDate={changeDate} />
      <List selectedDate={selectedDate} />
    </View>
  )
}

export default App
