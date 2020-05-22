import React, { useState } from 'react';
import Menu from '../menu/menu-view';
import AppRouter from '../route/Router';

const HomeView = () => (
    <div>
        <Menu />
        <AppRouter />
    </div>
)

export default HomeView;