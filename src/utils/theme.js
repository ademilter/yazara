export const colors = {
  blue: 'rgb(10, 132, 255)',
  green: 'rgb(48, 209, 88)',
  indigo: 'rgb(94, 92, 230)',
  orange: 'rgb(255, 159, 10)',
  pink: 'rgb(255, 55, 95)',
  purple: 'rgb(191, 90, 242)',
  red: 'rgb(255, 69, 58)',
  teal: 'rgb(100, 210, 255)',
  yellow: 'rgb(255, 214, 10)',
  white: 'rgb(142, 142, 142)',
  white2: 'rgb(174, 174, 178)',
  white3: 'rgb(199, 199, 204)',
  white4: 'rgb(209, 209, 214)',
  white5: 'rgb(229, 229, 234)',
  white6: 'rgb(242, 242, 247)',
  dark: 'rgb(142, 142, 147)',
  dark2: 'rgb(99, 99, 102)',
  dark3: 'rgb(72, 72, 74)',
  dark4: 'rgb(58, 58, 60)',
  dark5: 'rgb(44, 44, 46)',
  dark6: 'rgb(28, 28, 30)'
}

export const size = {
  finger: 46,
  large: 60
}

export const fontSize = {
  small: 13,
  normal: 17
}

function addSuffix(value) {
  return `${value}px`
}

export default {
  colors,
  sizes: {
    finger: addSuffix(size.finger),
    large: addSuffix(size.large)
  },
  fontSizes: {
    small: addSuffix(fontSize.small),
    normal: addSuffix(fontSize.normal)
  },
  radii: {
    zero: 0,
    normal: 8,
    max: 999
  }
}
