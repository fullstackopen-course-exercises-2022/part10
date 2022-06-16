import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
    constructor(namespace = 'auth'){
        this.namespace = namespace
    }

    async getAccessToken() {
        const tokenStorage = await AsyncStorage.getItem(`${this.namespace}:jwt`)
        return tokenStorage ? JSON.parse(tokenStorage) : []
    }

    async setAccessToken(data) {
        await AsyncStorage.setItem(`${this.namespace}:jwt`, JSON.stringify(data))
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:jwt`)
    }
}

export default AuthStorage
