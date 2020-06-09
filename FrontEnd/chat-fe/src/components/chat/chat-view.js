import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import config from '../../config/config';
import axios from 'axios';
import './chat.css';
import AuthService from '../auth/AuthService';

const ENDPOINT = config.apiUrl;

const Chat = () => {
    const [messages, setMessage] = useState([]);
    const { current: socket } = useRef(socketIOClient(ENDPOINT, {
        query: `token=${AuthService.getToken()}`
        // transportOptions: {
        //     polling: {
        //       extraHeaders: {  "Authorization": `Bearer ${AuthService.getToken()}` }
        //     },
        //   }
    }));
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
            <style jsx="true">{`
                * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .chat-container {
                font: 13px Helvetica, Arial;
            }
            
            form {
                background: #fff;
                padding: 3px;
                position: fixed;
                bottom: 0;
                width: 100%;
                border-color: #000;
                border-top-style: solid;
                border-top-width: 1px;
            }
            
            form input {
                border-style: solid;
                border-width: 1px;
                padding: 10px;
                width: 85%;
                margin-right: .5%;
            }
            
            form button {
                width: 9%;
                background: rgb(130, 224, 255);
                border: none;
                padding: 10px;
                margin-left: 2%;
            }
            
            #messages {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            
            #messages li {
                padding: 5px 10px;
                text-align: left;
            }
            
            #messages li:nth-child(odd) {
                background: #eee;
            }
            `}</style>
        </div>

    );
}

export default Chat;