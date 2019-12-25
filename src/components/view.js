import React from 'react'
import { View as V } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  space,
  layout,
  color,
  flexbox,
  border,
  position
} from 'styled-system'

const View = styled(V)(compose(space, color, layout, flexbox, border, position))

View.defaultProps = {
  bg: 'dark6'
}

export default View
