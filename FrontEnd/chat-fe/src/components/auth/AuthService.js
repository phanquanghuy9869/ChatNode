import axios from 'axios';
import AppConfig from '../../config/config';

export class AuthService {
    
    async authenticate(username, password) {
        try {
            const response =  await axios.post(AppConfig.auth.tokenUrl, { username: username, password: password });
            const res = response.data;
            if (res.isSuccess) {
                localStorage.setItem(AppConfig.auth.tokenKey, res.token);
                return true;
            }
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    signout() {
        this.isAuthenticated = false;
    }

    isAuthenticate() {
        const rs = localStorage.getItem(AppConfig.auth.tokenKey) != null;
        return rs;
    }

    getToken() {
        return localStorage.getItem(AppConfig.auth.tokenKey);
    }
}

export default new AuthService();