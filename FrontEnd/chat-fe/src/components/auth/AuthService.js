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

export class AuthService {
    constructor() {
        this.isAuthenticated = false;
    }

    authenticate() {
        axios.get(`https://www.reddit.com/r/reactjs.json`).then(
            res => {
                console.log('res: ', res.data.data.children.map(obj => obj.data));
                setPosts(res.data.data.children.map(obj => obj.data));        
            }
        )
    }
}

module.exports = new AuthService();