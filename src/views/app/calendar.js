import React from 'react'
import { CalendarList } from 'react-native-calendars'

function Index({ selectedDate, changeDate }) {
  return (
    <CalendarList
      horizontal={true}
      pagingEnabled={true}
      monthFormat={'MMMM yyyy'}
      onDayPress={changeDate}
      firstDay={1}
      hideExtraDays={false}
      markedDates={{
        '2019-12-16': { marked: true },
        '2019-12-17': { marked: true },
        '2019-12-18': { marked: true },
        '2019-12-19': { marked: true }
      }}
      // markingType={'custom'}
      // markedDates={{
      //   [selectedDate]: {
      //     customStyles: {
      //       container: {
      //        backgroundColor: '#444',}
      //         borderRadius: 16
      //       },
      //       text: {
      //         color: 'white'
      //       }
      //     }
      //   }
      // }}
      style={{
        paddingBottom: 10
      }}
      theme={{
        calendarBackground: '#000',
        // month
        textMonthFontSize: 20,
        monthTextColor: '#ccc',
        // day name
        textSectionTitleColor: '#888',
        // dot
        dotColor: '#fff',
        // day
        dayTextColor: '#fff',
        textDayFontWeight: 'normal',
        // day selected markedDates
        // selectedDayBackgroundColor: '#ddd',
        // selectedDayTextColor: '#000',
        // selectedDotColor: 'red',
        // day today
        todayBackgroundColor: 'red',
        todayTextColor: '#fff',
        textDisabledColor: '#444',
        'stylesheet.day.basic': {
          // dot: {
          //   position: 'absolute',
          //   left: 0,
          //   top: 0,
          //   width: 32,
          //   height: 32,
          //   borderWidth: 2,
          //   borderColor: '#444',
          //   borderRadius: 16
          // },
          // visibleDot: {
          //   opacity: 1,
          //   backgroundColor: 'transparent'
          // },
          // selectedDot: {
          //   backgroundColor: 'transparent'
          // },
          // disabledDot: {
          //   backgroundColor: 'transparent'
          // },
          // todayDot: {
          //   backgroundColor: 'transparent'
          // }
        }
      }}
    />
  )
}

export default Index
