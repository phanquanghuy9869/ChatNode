import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import config from '../../config/config';
import axios from 'axios';

const ENDPOINT = config.apiUrl;

const Chat = () => {
    const [messages, setMessage] = useState([]);
    const [currentMesg, setCurrentMsg] = useState('');
    // let socket = null;

    let socket = socketIOClient(ENDPOINT);
    // useEffect(() => {
      
    // }, []);
    socket.on('chat_message', (msg) => {
        console.log('trigger chat_message', messages);
        messages.push(msg);
        setMessage([...messages]);
    })

    socket.on('is_online', (username) => {
        messages.push(username);
        setMessage([...messages]);
    })

    const chatMsg = (e) => {
        e.preventDefault();
        console.log('submit');
        socket.emit('chat_message', currentMesg);
    }


    return (
        <div className="chat-container">
            <ul>
                {
                    messages.map(
                        (value, index) => (<li key={index}>{value}</li>)
                    )
                }
            </ul>
            <form action="/" method="POST" id="chatForm" onSubmit={chatMsg}>
                <input placeholder="type your message here..." /><button>Send</button>
            </form>
        </div>
    );
}

export default Chat;