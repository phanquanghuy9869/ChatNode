import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './components/login/login-view';
import Home from './components/home/home-view';
import axios from 'axios';
import AppConfig from './config/config';
import { HomeRouter } from './components/route/Router';

axios.interceptors.request.use(
  config => {
    const origin = config.url;
    const allowedOrigin = AppConfig.apiUrl;
    const token = localStorage.getItem(AppConfig.auth.tokenKey);

    if (origin.startsWith(allowedOrigin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

function App() {
  return (
    <div className="App">
      <HomeRouter />
    </div>
  );
}

export default App;
