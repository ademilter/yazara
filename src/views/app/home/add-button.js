import React from 'react'
import * as PropTypes from 'prop-types'

import View from '../../../components/view'
import ButtonIcon from '../../../components/button-icon'
import Icon from '../../../components/icon'

function AddButton({ onPress = () => {} }) {
  return (
    <View position="absolute" zIndex={100} right={24} bottom={24}>
      <ButtonIcon
        borderRadius="max"
        size="large"
        width="large"
        height="large"
        onPress={onPress}
      >
        <Icon name="add" />
      </ButtonIcon>
    </View>
  )
}

AddButton.propTypes = { onPress: PropTypes.func }

export default AddButton
