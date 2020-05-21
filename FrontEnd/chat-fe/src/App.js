import React, { useState } from 'react';
import './App.css';
import Header from './test/Header';
import Router from './components/route/Router';
import Menu from './components/menu/menu-view';
// const webpack = require('webpack');
import AppConfig from './config/config';
import Chat from './components/chat/chat-view'

// function App() {
//   const code = AppConfig.apiUrl;

//   return (
//     <div className="App">
//       code: { code }
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      {/* <Menu />      */}
      <Chat />
    </div>
  );
}

export default App;
