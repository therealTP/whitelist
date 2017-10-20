import React, { Component } from 'react';
import Sidebar from './Sidebar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    tests: ['test1', 'test2', 'test3']
  }
  
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    fetch(

    ).then(res => {

    }).catch(err => {

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Body">
          <Sidebar />
        </div>
        <ul>
          {this.state.tests.map(test =>
            <li key={test}>{test}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
