import React from 'react'
import { Calendar } from 'react-native-calendars'

function Index({ selectedDate, changeDate }) {
  return (
    <Calendar
      disableMonthChange={true}
      firstDay={1}
      monthFormat={'yyyy MMMM'}
      current={selectedDate}
      markingType={'custom'}
      markedDates={{
        '2019-12-15': {
          customStyles: {
            container: {
              backgroundColor: 'white',
              elevation: 4
            },
            text: {
              fontWeight: 'bold'
            }
          }
        }
      }}
      theme={{
        'stylesheet.day.single': {
          today: {
            backgroundColor: '#ade',
            borderRadius: 30
          },
          todayText: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
      }}
      onDayPress={changeDate}
    />
  )
}

export default Index
