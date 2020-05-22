
require('dotenv').config();

const env = process.env;
const AppConfig  = {
    apiUrl: env.REACT_APP_API_URL,
    auth: {
        tokenUrl: env.REACT_APP_API_URL + env.REACT_APP_TOKEN_URL,
        tokenKey: 'tok',
    }
};

export default AppConfig;