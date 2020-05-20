
require('dotenv').config();

const env = process.env;
const AppConfig  = {
    apiUrl: env.REACT_APP_API_URL
};

export default AppConfig;