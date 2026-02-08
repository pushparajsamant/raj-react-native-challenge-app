import { ActivityProvider } from '@/src/features/Activity/contexts/activityContext'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <ActivityProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Activities' }} />
        <Stack.Screen
          name="add-activity"
          options={{ title: 'Add Activity', headerBackTitle: 'Back' }}
        />
      </Stack>
    </ActivityProvider>
  )
}
