import { useActivities } from '@/src/features/Activity/contexts/activityContext'
import {
  ActivityFormInput,
  ActivityInput,
  activitySchema,
} from '@/src/features/Activity/validation/activitySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useHeaderHeight } from '@react-navigation/elements'
import { useRouter } from 'expo-router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

interface AddActivityProps {}

const AddActivity = (props: AddActivityProps) => {
  const { addActivity } = useActivities()
  const router = useRouter()
  const headerHeight = useHeaderHeight()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ActivityFormInput, any, ActivityInput>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      name: '',
      duration: 0,
      notes: '',
      activityDate: new Date().toISOString().split('T')[0],
    },
  })
  const onSubmit = async (data: ActivityInput) => {
    await addActivity({
      name: data.name,
      duration: data.duration,
      notes: data.notes,
      activityDate: new Date().toISOString(),
    })

    router.back()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}
    >
      <View style={AddActivityStyles.container}>
        <ScrollView contentContainerStyle={AddActivityStyles.inputContainer}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={AddActivityStyles.inputText}
                placeholder="Activity Name"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholderTextColor={'#555252'}
              />
            )}
          />
          {errors.name && (
            <Text style={AddActivityStyles.errorText}>
              {errors.name.message}
            </Text>
          )}
          <Controller
            control={control}
            name="duration"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={AddActivityStyles.inputText}
                placeholder="Duration (minutes)"
                keyboardType="numeric"
                onChangeText={onChange}
                onBlur={onBlur}
                value={String(value)}
                placeholderTextColor={'#555252'}
              />
            )}
          />
          {errors.duration && (
            <Text style={AddActivityStyles.errorText}>
              {errors.duration.message}
            </Text>
          )}
          <Controller
            control={control}
            name="notes"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={AddActivityStyles.inputText}
                placeholder="Notes"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholderTextColor={'#555252'}
              />
            )}
          />
        </ScrollView>

        <TouchableOpacity
          style={AddActivityStyles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={AddActivityStyles.buttonText}>Add Activity</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const AddActivityStyles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  inputContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  inputText: {
    backgroundColor: '#ccc',
    marginBottom: 16,
    padding: 16,
    borderRadius: 4,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
})

export default AddActivity
