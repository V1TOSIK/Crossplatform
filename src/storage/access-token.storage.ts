import AsyncStorage from '@react-native-async-storage/async-storage'

const ACCESS_TOKEN_KEY = 'accessToken'

export const AccessTokenStorage = {

    async getAccessToken(): Promise<string | null> {
        return await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
    },

    async setAccessToken(token: string): Promise<void> {
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token)
    },

    async removeAccessToken(): Promise<void> {
        await AsyncStorage.removeItem(ACCESS_TOKEN_KEY)
    }

}