import React from 'react'
import { CalendarList } from 'react-native-calendars'
import { colors } from '../../utils/theme'
import { LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['custom'] = {
  ...LocaleConfig.locales[''],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
}
LocaleConfig.defaultLocale = 'custom'

function Index({ selectedDate, changeDate }) {
  return (
    <CalendarList
      horizontal={true}
      pagingEnabled={true}
      monthFormat={'MMMM yyyy'}
      current={selectedDate}
      onDayPress={changeDate}
      firstDay={1}
      hideExtraDays={false}
      markedDates={{
        '2019-12-16': { marked: true },
        '2019-12-17': { marked: true },
        '2019-12-18': { marked: true },
        '2019-12-19': { marked: true }
      }}
      calendarHeight={314}
      style={{ paddingVertical: 8 }}
      theme={{
        'stylesheet.calendar.header': {
          header: {
            display: 'none'
          }
        },
        calendarBackground: colors.dark6,
        //-- day-title
        textSectionTitleColor: colors.white,
        //-- dot
        dotColor: colors.teal,
        //-- day
        dayTextColor: colors.white6,
        textDayFontWeight: 'normal',
        //-- day selected markedDates
        selectedDayBackgroundColor: colors.teal,
        selectedDotColor: colors.dark6,
        // selectedDayTextColor: '#000',
        //-- day today
        todayBackgroundColor: colors.red,
        todayTextColor: colors.white6,
        //-- other day
        textDisabledColor: colors.dark5
      }}
    />
  )
}

export default Index
