import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { set } from './../services/localStorage';
import { post } from './../services/fetch';

class LoginRoute extends Component {
    state = {
        email: "",
        password: ""
    };

    constructor(props) {
        super(props);
        // ...
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleLogin(event) {
        // Block form default behavior:
        event.preventDefault();
        const body = {
            email: this.state.email,
            password: this.state.password
        };

        post('/users/login', body)
        .then(res => {
            set('jwt', res.response.token);
            this.props.onLoggedIn();
        }).catch(err => {
            console.log("ERR", JSON.stringify(err));
        });
    }

    render() {
        return (
            <Route path="/login" render={() => (
                <div className="loginPage">
                    <h3>Log in to Whitelist</h3>
                    <form action="">
                        <label>Enter Email:</label>
                        <input value={this.state.email} onChange={this.handleEmailChange} type="text" placeholder="email"/>
                        <label>Enter Password:</label>
                        <input value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="password"/>
                        <button onClick={this.handleLogin}>Log In</button>
                    </form>
                    <Link to="/register">Register a new account</Link>
                </div>
            )} />
        );
    }
}

export default LoginRoute;