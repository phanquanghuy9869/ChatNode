import React from 'react';
import UserService from '../../service/user/user-service';
import RoomService from '../../service/room/room-service';
import axios from 'axios';
import AppConfig from '../../config/config';

export async function getAllUser() {
    try {
        const rs =  await UserService.getAll();
        const respond = rs.data;
        if (!respond.isSuccess) {
            alert(respond.message);
            return;
        }
        return respond.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getAllRoom() {
    try {
        const rs = await RoomService.getAll();
        const respond = rs.data;
        if (!respond.isSuccess) {
            alert(respond.message);
            return;
        }
        return respond.data;
    } catch (error) {
        console.log(error);
    }
}


