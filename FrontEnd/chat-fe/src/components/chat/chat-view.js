import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import config from '../../config/config';
import axios from 'axios';
import './chat.css';

const ENDPOINT = config.apiUrl;

const Chat = () => {
    const [messages, setMessage] = useState([]);
    const { current: socket } = useRef(socketIOClient(ENDPOINT));
    // let socket = null;

    // let socket = socketIOClient(ENDPOINT);
    useEffect(() => {
        socket.on('chat_message', ({ username, message }) => {
            console.log('trigger chat_message', messages);
            messages.push({ username: username, message: message });
            setMessage([...messages]);
        })

        socket.on('is_online', (username) => {
            messages.push({ username: username, message: ' has joined the room' });
            setMessage([...messages]);
        })

        socket.on('is_offline', (username) => {            
            messages.push({ username: username, message: ' has left the room' });
            setMessage([...messages]);
        })

        socket.emit('username', 'Mr huy');
        return () => {
            socket.close();
        }
    }, []);


    const chatMsg = (e) => {
        e.preventDefault();
        const currentMesg = e.target.msg.value;
        socket.emit('chat_message', currentMesg);
        document.getElementById('chatForm').reset();
    }


    return (
        <div className="chat-container">
            <ul id="messages">
                {
                    messages.map(
                        (value, index) => (<li key={index}><b>{value.username}: </b>{value.message}</li>)
                    )
                }
            </ul>
            <form action="/" method="POST" id="chatForm" onSubmit={chatMsg}>
                <input placeholder="type your message here..." name="msg" /><button>Send</button>
            </form>
        </div>
    );
}

export default Chat;