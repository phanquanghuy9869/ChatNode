// const Auth = {
//     isAuthenticated: false,
//     authenticate() {
//         this.isAuthenticated = true;
//     },
//     signout() {
//         this.isAuthenticated = false;
//     },
//     getAuth() {
//         return this.isAuthenticated;
//     }
// };
import axios from 'axios';
import AppConfig from '../../config/config';

export class AuthService {
    constructor() {
        this.isAuthenticated = true;
    }

    async authenticate() {
        this.isAuthenticated = true;
        try {
            const response =  await axios.get(AppConfig.auth.token);
            const res = response.data;
            if (res.isSuccess) {
                this.isAuthenticated = true;
                return this.isAuthenticated;
            }
        } catch (error) {
            console.log(error);
        }
    }

    signout() {
        this.isAuthenticated = false;
    }

    getAuth() {
        return this.isAuthenticated;
    }
}

export default new AuthService();