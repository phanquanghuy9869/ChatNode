import React, { useState } from 'react';
import './App.css';
import Header from './test/Header';
import Router from './components/route/Router';
import Menu from './components/menu/menu-view';
import AppRouter from './components/route/Router';

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
