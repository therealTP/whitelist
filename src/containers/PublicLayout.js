import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PublicLayout extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loggedIn: false
    // };
  }

  render() {
    const isLoggedIn = this.props.authed;

    if (isLoggedIn) {
      return (
        <Redirect from="/login" to="/dashboard" />
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