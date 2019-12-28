import React from 'react'
import {
  ExpandableCalendar,
  CalendarProvider,
  LocaleConfig
} from 'react-native-calendars'
import { colors, fontSize } from '../../utils/theme'

function Calendar({ data, loading, onChangeDate, children }) {
  const markedDates = loading
    ? {}
    : data.logs.reduce((acc, curr) => {
        acc[curr.created_at] = { marked: true }
        return acc
      }, {})

  return (
    <CalendarProvider
      onDateChanged={onChangeDate}
      // onMonthChange={date => {
      //   onChangeDate(date.dateString)
      // }}
    >
      <ExpandableCalendar
        allowShadow={false}
        style={{ marginTop: -40 }}
        firstDay={1}
        hideArrows
        markedDates={markedDates}
        theme={theme}
      />
      {children}
    </CalendarProvider>
  )
}

const theme = {
  calendarBackground: colors.dark6,
  // day names (header)
  textSectionTitleColor: colors.white,
  textDayHeaderFontSize: fontSize.xSmall,
  textDayHeaderFontWeight: 'normal',
  // today
  todayBackgroundColor: colors.dark3,
  todayTextColor: colors.white6,
  // dates
  dayTextColor: colors.white6,
  textDayFontSize: fontSize.normal,
  textDayFontWeight: 'normal',
  textDayStyle: { marginTop: Platform.OS === 'android' ? 2 : 4 },
  // selected date
  selectedDayBackgroundColor: colors.indigo,
  selectedDayTextColor: colors.white6,
  // disabled date
  textDisabledColor: colors.dark4,
  // dot (marked date)
  dotColor: colors.indigo,
  selectedDotColor: colors.white6
}

LocaleConfig.locales['custom'] = {
  ...LocaleConfig.locales[''],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
}
LocaleConfig.defaultLocale = 'custom'

export default Calendar
