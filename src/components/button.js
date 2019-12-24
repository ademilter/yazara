import React from 'react'
import styled from 'styled-components'
import Link from './link'

const Button = styled(Link)({})

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 1,
  bg: 'blue',
  px: 24,
  height: 'finger'
}

export default Button
