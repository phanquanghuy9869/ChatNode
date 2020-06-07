import React, { useState } from 'react';
import RoomService from '../../service/room/room-service';
import roomService from '../../service/room/room-service';
import userService from '../../service/user/user-service';

export async function submitRoom(room) {
    const valid = validate(room);
    if (!valid.isValid) {
        const mess = valid.errs.join();
        alert(mess);
        return;
    }

    try {
        const rs = await roomService.CreateRoom(room);
        if (rs.data.isSuccess) {
            alert('Thêm thành công!');
            return true;
        } else {
            alert(rs.data.message);
            return false;
        }
    } catch (error) {
        alert('Có lỗi xảy ra!');
        return false;
    }
}

export async function getUser() {
    const rs = await userService.getAll();    
    return rs;
}

function validate(room) {
    let errs = [];

    if (room.name == null || room.name.trim() === '') {
        errs.push('Room name can not be empty');
    }

    if (room.user == null || room.user.length == 0) {
        errs.push('User can not be empty');
    }

    const result = { isValid: errs.length == 0, errs: errs };
    return result;
}