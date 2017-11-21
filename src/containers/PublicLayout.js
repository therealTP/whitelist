import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PublicLayout extends Component {
  state = {
    loggedIn: false
  };

  render() {
    const isLoggedIn = this.props.authed;

    if (isLoggedIn) {
      return (
        <Redirect to={{
            pathname: '/'
        }}/>
      );
    }

    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default PublicLayout;