import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface FloatingButtonProps {
  icon?: React.ReactNode
  onPress?: () => void
}

const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={props.onPress}>
      {props.icon ? (
        props.icon
      ) : (
        <Text style={{ color: '#fff', fontSize: 24 }}>+</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: '#007bff', // Replace with your primary color
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 30,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})

export default FloatingButton
