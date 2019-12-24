import React from 'react'
import { Text as T } from 'react-native'
import styled from 'styled-components'
import { compose, space, color, typography } from 'styled-system'

const Text = styled(T)(compose(space, color, typography))

Text.defaultProps = {
  color: 'white',
  fontSize: 'normal'
}

export default Text
