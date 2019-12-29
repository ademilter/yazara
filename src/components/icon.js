import React from 'react'
import SvgIcon from 'react-native-svg-icon'
import { withTheme } from 'styled-components'

import SVGS from '../utils/icons'

const Icon = props => (
  <SvgIcon
    {...props}
    svgs={SVGS}
    width={props.size}
    height={props.size}
    stroke={props.theme.colors[props.color]}
    fill={props.fill ? props.theme.colors[props.fill] : 'none'}
  />
)

Icon.defaultProps = {
  fill: null,
  color: 'white6',
  size: '20',
  viewBox: '0 0 24 24',
  strokeWidth: 2
}

export default withTheme(Icon)
