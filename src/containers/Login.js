import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { set } from './../services/localStorage';
import { post } from './../services/fetch';

class LoginView extends Component {
    state = {
        email: "",
        password: "",
        redirect: false // this will trigger a redirect on login
    };

    constructor(props) {
        super(props);
        // ...
        console.log("PROPS", this.props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.setAsLoggedIn = () => {
            this.props.loggedIn = true;
        }
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
            // Set app.state.loggedIn = true
            // this.setAsLoggedIn();
            // Go to dashboard
            this.setState({redirect: true});
        }).catch(err => {
            console.log("ERR", JSON.stringify(err));
        });
    }
  
    render() {
        // if redirecting, return redirect component:
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: '/',
                    state: { from: '/login' }
                }}/>
            );
        } else { // if not, return login form:
            return (
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
            );
        }
  }
}

export default LoginView;