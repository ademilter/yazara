import React from 'react'
import styled from 'styled-components'
import Button from './button'

const ButtonIcon = styled(Button)({})

ButtonIcon.defaultProps = {
  px: 0,
  size: 'finger'
}

export default ButtonIcon
