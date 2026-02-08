import { StyleSheet } from 'react-native'
export const FloatingButtonStyles = StyleSheet.create({
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
  alternativeText: {
    color: '#fff',
    fontSize: 24,
  }
})