import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashBoard from '../../test/Dashboard';
import Landing from '../../test/Landing';
import Auth from '../auth/AuthService';
import Menu from '../menu/menu-view';
import Login from '../login/login-view';
import Chat from '../chat/chat-view';
import Home from '../home/home-view';
import SignUp from '../register/register-view';

const AppRouter = (props) => (
    <Switch>
        {/* <Route exact path='/login' component={Login} /> */}
        <PrivateRoute exact path='/public' component={Landing} />
        <PrivateRoute exact path='/menu' component={Menu} />
        <PrivateRoute exact path='/chat' component={Chat} />
        {/* <PrivateRoute path='/' component={Home} /> */}
        <PrivateRoute path="/protected" component={DashBoard} />
    </Switch>
)

const HomeRouter = (props) => (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={SignUp} />
        <PrivateRoute path='/' component={Home} />
    </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => Auth.isAuthenticate() ?
        (<Component {...props} />) : (<Redirect to={{ pathname: "/login" }} />)
    }
    />
);

export { AppRouter, HomeRouter };