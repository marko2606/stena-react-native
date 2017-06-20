import { AsyncStorage } from 'react-native';

const tokens = {
    access: 'access_token',
    refresh: 'refresh_token'
};

class LocalStorage {
    clearTokens() {
        AsyncStorage.removeItem(tokens.access);
        AsyncStorage.removeItem(tokens.refresh);
    }
    getAccessToken() {
        return AsyncStorage.getItem(tokens.access);
    }
    getRefreshToken() {
        return AsyncStorage.getItem(tokens.refresh);
    }
    setTokens(accessToken, refreshToken) {
        AsyncStorage.setItem(tokens.access, accessToken);
        AsyncStorage.setItem(tokens.refresh, refreshToken);
    }
}

export default new LocalStorage();