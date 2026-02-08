import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorageAdapter = {
  async get(key: string) {
    const data = await AsyncStorage.getItem(key)
    if (!data) return null
    try {
      return JSON.parse(data)
    } catch (error) {
      console.error(`[Storage] Failed to read "${key}":`, error)
      return new StorageError(`Could not parse data for key "${key}"`, error)
    }
  },

  async set(key: string, value: unknown) {
    try {
      const serialized = JSON.stringify(value)
      await AsyncStorage.setItem(key, serialized)
    } catch (error) {
      console.error(`[Storage] Failed to write "${key}":`, error)
      throw new StorageError(`Could not persist data for key "${key}"`, error)
    }
  },
};
export class StorageError extends Error {
  constructor(message: string, public cause?: unknown) {
    super(message)
    this.name = 'StorageError'
  }
}
