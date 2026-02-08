import ActivityItem from '@/src/components/ActivityItem/ActivityItem'
import FloatingButton from '@/src/components/FloatingButton/FloatingButton'
import { useActivities } from '@/src/features/Activity/contexts/activityContext'
import { useRouter } from 'expo-router'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { HomeStyles } from '../src/styles/screens/home.styles'
export default function Index() {
  const { loading, activities, deleteActivity } = useActivities()
  const router = useRouter()
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    )
  }
  const handleAddActivity = () => {
    router.push('/add-activity')
  }
  const handleDelete = (id: string) => {
    deleteActivity(id)
  }
  return (
    <View style={HomeStyles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ActivityItem {...item} onDelete={() => handleDelete(item.id)} />
        )}
        ListEmptyComponent={
          <View style={HomeStyles.emptyTextContainer}>
            <Text style={HomeStyles.emptyText}>No activities available</Text>
          </View>
        }
        contentContainerStyle={HomeStyles.flatListContainer}
      />
      <FloatingButton onPress={handleAddActivity} />
    </View>
  )
}
