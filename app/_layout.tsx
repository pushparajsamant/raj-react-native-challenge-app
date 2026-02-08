import { ActivityProvider } from '@/src/features/Activity/contexts/activityContext'
import { Stack } from 'expo-router'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

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
      <Toast />
    </ActivityProvider>
  )
}
