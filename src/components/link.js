import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { compose, space, layout, color, flexbox, border } from 'styled-system'

const Link = styled(TouchableOpacity)(
  compose(space, color, flexbox, layout, border)
)

export default Link
