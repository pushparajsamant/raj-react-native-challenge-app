import { asyncStorageAdapter } from "@/src/features/Activity/services/storage/asyncStorageAdapter";
import { Activity } from "../@types/Activity";

const getKey = (userId: string) => `activities:${userId}`;

export const activityStorage = {
  async getActivities(userId: string): Promise<Activity[]> {
    return (await asyncStorageAdapter.get(getKey(userId))) || [];
  },

  async saveActivities(userId: string, activities: Activity[]) {
    await asyncStorageAdapter.set(getKey(userId), activities);
  },
};
