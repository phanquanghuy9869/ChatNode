import axios from 'axios';
import AppConfig from '../../config/config';

export default {
    CreateRoom: async (room) => {
        return await axios.post(AppConfig.room.createRoomUrl, room);
    },
    getAll: async() => {
        return await axios.post(AppConfig.room.getAllRoomUrl);
    },
}