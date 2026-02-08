import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ActivityItemStyles } from './styles/ActivityItem.styles'
interface ActivityItemProps {
  name: string
  duration?: number
  notes?: string
  activityDate?: string
  onDelete?: () => void
}

const ActivityItem = (props: ActivityItemProps) => {
  const { name, duration, notes, activityDate, onDelete } = props
  const deleteActivity = () => {
    if (onDelete) {
      onDelete()
    }
  }

  return (
    <View style={ActivityItemStyles.container}>
      <FontAwesome5 name="walking" size={24} color="black" />
      <View style={ActivityItemStyles.details}>
        <Text style={ActivityItemStyles.caption}>
          Date:
          <Text style={ActivityItemStyles.textValue}>
            {' '}
            {activityDate ? new Date(activityDate).toLocaleDateString() : ''}
          </Text>
        </Text>
        <Text style={ActivityItemStyles.activityName}>{name}</Text>
        {duration !== undefined && (
          <Text style={ActivityItemStyles.caption}>
            Duration:{' '}
            <Text style={ActivityItemStyles.textValue}>{duration} mins</Text>
          </Text>
        )}
        {notes && (
          <Text style={ActivityItemStyles.caption}>
            Notes: <Text style={ActivityItemStyles.textValue}>{notes}</Text>
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={deleteActivity}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default ActivityItem
