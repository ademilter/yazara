import React from 'react'
import { CalendarList } from 'react-native-calendars'

function Index({ selectedDate, changeDate }) {
  return (
    <CalendarList
      horizontal={true}
      pagingEnabled={true}
      monthFormat={'yyyy MMMM'}
      markingType={'custom'}
      markedDates={{
        [selectedDate]: {
          customStyles: {
            container: {
              backgroundColor: '#ade',
              borderRadius: 30
            },
            text: {
              color: 'black',
              fontWeight: 'bold'
            }
          }
        }
      }}
      theme={{
        'stylesheet.day.single': {
          today: {
            backgroundColor: 'transparent'
          },
          todayText: {
            color: 'red',
            fontWeight: 'bold'
          }
        }
      }}
      onDayPress={changeDate}
    />
  )
}

export default Index
