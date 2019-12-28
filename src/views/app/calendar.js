import React from 'react'
import { CalendarList } from 'react-native-calendars'
import { colors } from '../../utils/theme'
import { LocaleConfig } from 'react-native-calendars'

function Index({
  today,
  data,
  loading,
  selectedDate,
  onChangeDate,
  onMonthChange
}) {
  const obj =
    today === selectedDate ? {} : { [selectedDate]: { selected: true } }
  const markedDates = loading
    ? {}
    : data.logs.reduce((acc, curr) => {
        let options = { marked: true }
        const isSelected = curr.created_at === selectedDate
        if (isSelected) {
          options.selected = true
        }
        acc[curr.created_at] = options
        return acc
      }, obj)

  return (
    <CalendarList
      horizontal
      pagingEnabled
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
  selectedDayBackgroundColor: colors.white,
  selectedDotColor: colors.dark6,
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
