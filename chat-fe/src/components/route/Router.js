import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashBoard from '../../test/Dashboard';
import Landing from '../../test/Landing';
import Auth from '../auth/AuthService';

const AppRouter = (props) => (
    <Switch>
        <Route exact path='/public' component={Landing} />
        <PrivateRoute path="/protected" component={DashBoard} />
    </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => Auth.getAuth() ?
        (<Component {...props} />) : (<Redirect to={{ pathname: "/public" }} />)
    }
    />
);

export default AppRouter;