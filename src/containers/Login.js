import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginView extends Component {
  render() {
    return (
        <div className="loginPage">
            <h3>Log in to Whitelist</h3>
            <form action="">
                <label>Enter Email:</label>
                <input type="text" placeholder="email"/>
                <label>Enter Password:</label>
                <input type="password" placeholder="password"/>
                <button><Link to="/">Log In</Link></button>
            </form>
            <Link to="/register">Register a new account</Link>
        </div>
    );
  }
}

export default LoginView;