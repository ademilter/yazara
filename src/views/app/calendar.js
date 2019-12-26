import React from 'react'
import { CalendarList } from 'react-native-calendars'
import { colors } from '../../utils/theme'
import { LocaleConfig } from 'react-native-calendars'

function Index({ data, loading, selectedDate, onChangeDate, onMonthChange }) {
  const markedDates = loading
    ? {}
    : data.logs.reduce((acc, curr) => {
        acc[curr.created_at] = { marked: true }
        return acc
      }, {})

  console.log(markedDates)

  return (
    <CalendarList
      horizontal
      pagingEnabled
      monthFormat={'MMMM yyyy'}
      current={selectedDate}
      onDayPress={onChangeDate}
      onVisibleMonthsChange={onMonthChange}
      firstDay={1}
      hideExtraDays={false}
      markedDates={markedDates}
      calendarHeight={314}
      style={{ paddingVertical: 8 }}
      theme={theme}
    />
  )
}

const theme = {
  'stylesheet.calendar.header': {
    header: {
      display: 'none'
    }
  },
  calendarBackground: colors.dark6,
  //-- day-title
  textSectionTitleColor: colors.white,
  //-- dot
  dotColor: colors.indigo,
  //-- day
  dayTextColor: colors.white6,
  textDayFontWeight: 'normal',
  //-- day selected markedDates (selected: true)
  // selectedDayBackgroundColor: colors.indigo,
  // selectedDotColor: colors.dark6,
  //-- day today
  todayBackgroundColor: colors.indigo,
  todayTextColor: colors.white6,
  //-- other day
  textDisabledColor: colors.dark5
}

LocaleConfig.locales['custom'] = {
  ...LocaleConfig.locales[''],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
}
LocaleConfig.defaultLocale = 'custom'

export default Index
