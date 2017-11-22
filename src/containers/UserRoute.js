import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../stateless/Header/Header';

const UserRoute = ({ component: Component, authed, ...rest }) => (
    <Route {...rest} render={( props ) => (
        authed === true
        ? <div><Header /><Component {...props} /></div>
        : <Redirect to='/login' />
    )} />
);

export default UserRoute;