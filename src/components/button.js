import React from 'react'
import styled from 'styled-components'
import Link from './link'

const Button = styled(Link)({})

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: "normal",
  bg: 'indigo',
  px: 24,
  height: 'finger'
}

export default Button
