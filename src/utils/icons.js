import React from 'react'
import { G, Circle, Line, Path, Polyline } from 'react-native-svg'

export default {
  search: {
    svg: (
      <G>
        <Circle
          cx="9.813"
          cy="9.812"
          r="9.063"
          transform="translate(-3.056 4.62) rotate(-23.025)"
        />
        <Line x1="16.221" y1="16.22" x2="23.25" y2="23.25" />
      </G>
    )
  },
  add: {
    svg: (
      <G>
        <Line x1="0.75" y1="12" x2="23.25" y2="12" />
        <Line x1="12" y1="0.75" x2="12" y2="23.25" />
      </G>
    )
  },
  arrowSimpleRight: {
    svg: <Path d="M5.5.75,16.22,11.47a.749.749,0,0,1,0,1.06L5.5,23.25" />
  },
  arrowLeft: {
    svg: (
      <G>
        <Line x1="23.25" y1="12" x2="0.75" y2="12" />
        <Polyline points="11.25 1.5 0.75 12 11.25 22.5" />
      </G>
    )
  },
  arrowRight: {
    svg: (
      <G>
        <Line x1="0.75" y1="12" x2="23.25" y2="12" />
        <Polyline points="12.75 22.5 23.25 12 12.75 1.5" />
      </G>
    )
  },
  check: {
    svg: (
      <G>
        <Path d="M23.25.749,8.158,22.308a2.2,2.2,0,0,1-3.569.059L.75,17.249" />
      </G>
    )
  },
  close: {
    svg: (
      <G>
        <Line x1="0.75" y1="23.249" x2="23.25" y2="0.749" />
        <Line x1="23.25" y1="23.249" x2="0.75" y2="0.749" />
      </G>
    )
  }
}
