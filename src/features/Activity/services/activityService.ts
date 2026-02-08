import { Activity } from "../models/Activity";
import { activityStorage } from "./activityStorageService";

const generateId = () => Math.random().toString(36).substring(2);

const USER_ID = "default-user";

export const activityService = {
  async getActivities(): Promise<Activity[]> {
    return activityStorage.getActivities(USER_ID);
  },

  async addActivity(data: { 
    name: string;
    duration: number;
    notes?: string;
    activityDate: string;
  }) {
    const activities = await activityStorage.getActivities(USER_ID);

    const now = new Date().toISOString();

    const newActivity: Activity = {
      id: generateId(),
      userId: USER_ID,
      name: data.name,
      duration: data.duration,
      notes: data.notes,
      createdAt: now,
      activityDate: data.activityDate,
    };

    const updated = [newActivity, ...activities];

    await activityStorage.saveActivities(USER_ID, updated);

    return updated;
  },

  async deleteActivity(id: string) {
    const activities = await activityStorage.getActivities(USER_ID);
    const updated = activities.filter((a) => a.id !== id);
    await activityStorage.saveActivities(USER_ID, updated);
    return updated;
  },
};
