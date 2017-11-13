import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterView extends Component {
  render() {
    return (
        <div className="registerPage">
            <h3>Register for Whitelist</h3>
            <form action="">
                <label>Enter Email:</label>
                <input type="text" placeholder="email"/>
                <label>Enter Password:</label>
                <input type="password" placeholder="password"/>
                <button><Link to="/dashboard">Register</Link></button>
            </form>
            <Link to="/login">Log in with existing account</Link>
        </div>
    );
  }
}

export default RegisterView;