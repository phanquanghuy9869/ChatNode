
import axios from 'axios';
import AppConfig from '../../config/config';

const UserService = {
    createUser: async (firstName, lastName, email, password) => {
        return await axios.post(AppConfig.user.createUserUrl, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
    }
}

export default UserService;