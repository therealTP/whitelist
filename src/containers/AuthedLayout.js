import React, { Component } from 'react';
import Header from '../stateless/Header/Header';

class AuthedLayout extends Component {
  render() {
    return (
        <div>
            <Header/>
            {this.props.children}
        </div>
    );
  }
}

export default AuthedLayout;