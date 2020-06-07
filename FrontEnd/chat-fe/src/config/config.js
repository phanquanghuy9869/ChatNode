
require('dotenv').config();

const env = process.env;
const AppConfig  = {
    apiUrl: env.REACT_APP_API_URL,
    auth: {
        tokenUrl: env.REACT_APP_API_URL + env.REACT_APP_TOKEN_URL,
        tokenKey: 'tok',
    },
    user: {
        createUserUrl: env.REACT_APP_API_URL + env.REACT_APP_CREATE_USER_URL,
        getAllUserUrl: env.REACT_APP_API_URL + env.REACT_APP_GET_ALL_USER_URL
    },
    room: {
        createRoomUrl: env.REACT_APP_API_URL + env.REACT_APP_CREATE_ROOM_URL,
        getAllRoomUrl: env.REACT_APP_API_URL + env.REACT_APP_GET_ALL_ROOM_URL
    }
};

export default AppConfig;