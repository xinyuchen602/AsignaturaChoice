import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../model/model';

const userKey = '@user_Key';
export const storeUser = async (value: User) => {
  try {
    await AsyncStorage.setItem(userKey, JSON.stringify(value));
  } catch (e) {
    console.log('Error storing data: ' + e);
  }
};

export const getUser = async () => {
  try {
    return await AsyncStorage.getItem(userKey);
  } catch (e) {}
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(userKey);
  } catch (e) {}
};
