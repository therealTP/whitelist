import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../stateless/Header/Header';

class AuthedLayout extends Component {
  render() {
    const isLoggedIn = this.props.authed;

    if (!isLoggedIn) {
      return (
        <Redirect from="/dashboard" to={{
            pathname: "/login"
        }}/>
      );
    }

    return (
      <div>
          <Header/>
          {this.props.children}
      </div>
    );
  }
}

export default AuthedLayout;