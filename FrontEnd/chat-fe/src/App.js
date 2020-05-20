import React, { useState } from 'react';
import './App.css';
import Header from './test/Header';
import Router from './components/route/Router';
import Menu from './components/menu/menu-view';
import AppRouter from './components/route/Router';
// const webpack = require('webpack');
import AppConfig from './config/config';

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
      {/* <Header />
      <Router /> */}
      <Menu />      
      <AppRouter />
    </div>
  );
}

export default App;
