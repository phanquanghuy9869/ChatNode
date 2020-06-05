import axios from 'axios';
import AppConfig from '../../config/config';

export class AuthService {
    
    async authenticate(username, password) {
        return true;
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
        return true;
        const rs = localStorage.getItem(AppConfig.auth.tokenKey) != null;
        return rs;
    }
}

export default new AuthService();