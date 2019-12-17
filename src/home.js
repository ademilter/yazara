import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import format from 'date-fns/format'
// import addWeeks from 'date-fns/addWeeks'

// import Agenda from './agenda'
import Calendar from './calendar'
import List from './list'

function App() {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  )
  // const [rangeDate, setRangeDate] = useState([])

  // useEffect(() => {
  //   const range = [
  //     format(addWeeks(new Date(selectedDate), -2), 'yyyy-MM-dd'),
  //     format(addWeeks(new Date(selectedDate), 2), 'yyyy-MM-dd')
  //   ]
  //   setRangeDate(range)
  //   // console.log(range)
  // }, [selectedDate])

  const changeDate = date => {
    console.log('change date', date)
    setSelectedDate(date.dateString)
  }

  return (
    <View style={{ flex: 1 }}>
      {/*<Agenda*/}
      {/*  selectedDate={selectedDate}*/}
      {/*  rangeDate={rangeDate}*/}
      {/*  changeDate={changeDate}*/}
      {/*/>*/}
      <Calendar selectedDate={selectedDate} changeDate={changeDate} />
      <List selectedDate={selectedDate} />
    </View>
  )
}

export default App
