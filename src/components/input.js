import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  layout,
  space,
  color,
  border,
  typography
} from 'styled-system'

const Input = styled(TextInput)(
  compose(layout, space, color, border, typography)
)

Input.defaultProps = {
  height: 'finger',
  color: 'dark',
  bg: 'white',
  px: 16,
  fontSize: 'normal',
  borderRadius: 1,
  autoCapitalize: 'none',
  autoCorrect: false,
  maxLength: 128
}

export default Input
