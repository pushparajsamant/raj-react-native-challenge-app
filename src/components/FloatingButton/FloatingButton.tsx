import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FloatingButtonStyles } from './styles/FloatingButton.styles'

interface FloatingButtonProps {
  icon?: React.ReactNode
  onPress?: () => void
}

const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <TouchableOpacity
      style={FloatingButtonStyles.floatingButton}
      onPress={props.onPress}
    >
      {props.icon ? (
        props.icon
      ) : (
        <Text style={FloatingButtonStyles.alternativeText}>+</Text>
      )}
    </TouchableOpacity>
  )
}

export default FloatingButton
