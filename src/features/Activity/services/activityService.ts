import { Activity } from '../@types/Activity'
import { activityStorage } from './activityStorageService'

const generateId = () => Math.random().toString(36).substring(2)

const USER_ID = 'default-user'
export class ActivityServiceError extends Error {
  constructor(
    public code: 'FETCH_ERROR' | 'SAVE_ERROR' | 'NOT_FOUND' | 'INVALID_INPUT',
    message: string,
    public cause?: unknown,
  ) {
    super(message)
    this.name = 'ActivityServiceError'
  }
}
export const activityService = {
  async getActivities(): Promise<Activity[]> {
    try {
      return await activityStorage.getActivities(USER_ID)
    } catch (error) {
      console.error('[ActivityService] Failed to fetch activities:', error)
      throw new ActivityServiceError(
        'FETCH_ERROR',
        'Could not load activities. Please try again.',
        error,
      )
    }
  },

  async addActivity(data: {
    name: string
    duration: number
    notes?: string
    activityDate: string
  }) {
    try {
      if (!data.name?.trim()) {
        throw new ActivityServiceError(
          'INVALID_INPUT',
          'Activity name is required',
        )
      }
      const activities = await activityStorage.getActivities(USER_ID)

      const now = new Date().toISOString()

      const newActivity: Activity = {
        id: generateId(),
        userId: USER_ID,
        name: data.name,
        duration: data.duration,
        notes: data.notes,
        createdAt: now,
        activityDate: data.activityDate,
      }

      const updated = [newActivity, ...activities]

      await activityStorage.saveActivities(USER_ID, updated)

      return updated
    } catch (error) {
      console.error('Error adding activity:', error)
      throw new ActivityServiceError(
        'SAVE_ERROR',
        'Could not add activity. Please try again.',
        error,
      )
    }
  },

  async deleteActivity(id: string) {
    try {
      if (!id?.trim()) {
        throw new ActivityServiceError(
          'INVALID_INPUT',
          'Activity ID is required',
        )
      }
      const activities = await activityStorage.getActivities(USER_ID)
    const updated = activities.filter((a) => a.id !== id)
    await activityStorage.saveActivities(USER_ID, updated)
    return updated
    } catch (error) {
      console.error('Error deleting activity:', error)
      throw new ActivityServiceError(
        'SAVE_ERROR',
        'Could not delete activity. Please try again.',
        error,
      )
    }
  },
}
