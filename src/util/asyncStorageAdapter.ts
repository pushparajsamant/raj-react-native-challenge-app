import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorageAdapter = {
  async get(key: string) {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  async set(key: string, value: unknown) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
};
