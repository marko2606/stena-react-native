import axios from 'axios';
import config from '../utils/AppConfig';

const authConfig = config.auth;
const serverUrl = authConfig.serverUrl;
const clientSecret = authConfig.client_secret;
const clientId = authConfig.client_id;

const GRANT_TYPES = {
    PASSWORD: 'password',
    REFRESH_TOKEN: 'refresh_token'
};

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
};

class LoginService {
    transformRequest(data) {
        const str = [];
        Object.keys(data).forEach((key) => {
            str.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
        });
        return str.join('&');
    }

    loginUser(user) {
        const params = {
            grant_type: GRANT_TYPES.PASSWORD,
            client_id: clientId,
            client_secret: clientSecret,
            username: user.username,
            password: user.password
        };
        return axios({
            method: 'POST',
            headers,
            url: serverUrl,
            data: params,
            transformRequest: data => (
                this.transformRequest(data)
            )
        });
    }
    refreshToken(token) {
        const params = {
            grant_type: GRANT_TYPES.REFRESH_TOKEN,
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: token
        };
        return axios({
            method: 'POST',
            headers,
            url: serverUrl,
            data: params,
            transformRequest: data => (
                this.transformRequest(data)
            ),
            refreshToken: true
        });
    }
}

export default new LoginService();