import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setItem(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("Error storing value: ", error);
    }
}

export async function getItem(key) {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log("Error retrieving value: ", error);
    }
}

export async function removeItem(key) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing value: ", error);
    }
}
