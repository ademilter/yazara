import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import { colors } from '../utils/theme'
import {
  compose,
  layout,
  space,
  color,
  border,
  typography
} from 'styled-system'

const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: colors[props.placeholderTextColor || 'dark4']
}))(compose(layout, space, color, border, typography))

Input.defaultProps = {
  height: 'finger',
  color: 'dark6',
  bg: 'white6',
  px: 16,
  fontSize: 'normal',
  borderRadius: 1,
  autoCapitalize: 'none',
  autoCorrect: false,
  maxLength: 128
}

export default Input
