import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { compose, space, layout, color, flexbox, border } from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(space, color, flexbox, layout, border)
)

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 1,
  bg: 'white30',
  px: 24,
  height: 'finger'
}

export default Button
