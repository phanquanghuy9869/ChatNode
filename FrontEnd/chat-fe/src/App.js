import React, { useState } from 'react';
import './App.css';
import Header from './test/Header';
import { Redirect, Route, Switch } from "react-router-dom";
import Router from './components/route/Router';
import Menu from './components/menu/menu-view';
// const webpack = require('webpack');
import AppConfig from './config/config';
import Chat from './components/chat/chat-view'
import AppRouter from './components/route/Router';
import Login from './components/login/login-view';
import Home from './components/home/home-view';
import axios from 'axios';
import AppConfig from './config/config';

axios.interceptors.request.use(
  config => {
    const origin = new Url(config.url);
    const allowedOrigin = [AppConfig.apiUrl];

    if (allowedOrigin.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
