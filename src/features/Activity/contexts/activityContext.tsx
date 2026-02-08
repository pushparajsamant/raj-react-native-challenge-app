import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { Activity } from '../models/Activity'
import { activityService } from '../services/activityService'
import { activityReducer, initialState } from './activityReducer'

export interface IActivityContext {
  activities: Activity[]
  loading: boolean
  addActivity: (payload: any) => Promise<void>
  deleteActivity: (id: string) => Promise<void>
}

export const ActivityContext = createContext<IActivityContext | null>(null)

export const ActivityProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  const loadActivities = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const data = await activityService.getActivities()
    dispatch({ type: 'SET_ACTIVITIES', payload: data as Activity[] })
    dispatch({ type: 'SET_LOADING', payload: false })
  }

  const addActivity = async (payload: any) => {
    const updated = await activityService.addActivity(payload)
    dispatch({ type: 'SET_ACTIVITIES', payload: updated as Activity[] })
  }

  const deleteActivity = async (id: string) => {
    const updated = await activityService.deleteActivity(id)
    dispatch({ type: 'SET_ACTIVITIES', payload: updated as Activity[] })
  }

  useEffect(() => {
    loadActivities()
  }, [])
  return (
    <ActivityContext.Provider value={{ ...state, addActivity, deleteActivity }}>
      {children}
    </ActivityContext.Provider>
  )
}

export const useActivities = (): IActivityContext => {
  const context = useContext(ActivityContext)
  if (!context) {
    throw new Error('useActivities must be used within an ActivityProvider')
  }
  return context
}
