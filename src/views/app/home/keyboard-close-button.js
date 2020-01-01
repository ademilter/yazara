import React from 'react'
import * as PropTypes from 'prop-types'

import Button from '../../../components/button'
import View from '../../../components/view'

function KeyboardCloseButton(props) {
  return (
    <View
      zIndex={100}
      position="absolute"
      left={0}
      top={0}
      width="100%"
      height="100%"
    >
      <Button
        px={0}
        width="100%"
        height="100%"
        onPress={props.onPress}
        bg="transparent"
      />
    </View>
  )
}

KeyboardCloseButton.propTypes = { onPress: PropTypes.func }

export default KeyboardCloseButton
