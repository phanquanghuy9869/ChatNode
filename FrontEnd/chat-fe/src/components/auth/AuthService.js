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

export class AuthService {
    constructor() {
        this.isAuthenticated = false;
    }

    authenticate() {

    }
}

module.exports = new AuthService();