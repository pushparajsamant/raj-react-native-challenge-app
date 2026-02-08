import { StyleSheet } from 'react-native'

export const ActivityItemStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  details: {
    flex: 1,
    marginLeft: 16,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  textValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    color: '#141313',
  },
})
