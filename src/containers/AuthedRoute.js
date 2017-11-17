import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class AuthedRoute extends Component {
    state = {
        allowedRoles: ['user', 'admin'],
        adminRoles: ['admin']
    }

    render() {
        if (this.state.allowedRoles.includes(this.props.role)) {
            return (
                <Route exact={this.props.route.exact} path={this.props.route.path} component={this.props.route.component} />
            );
        } 
    }
}

export default AuthedRoute;