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

  componentDidMount() {
    
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
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload right now!.
          </p>
        </div>
        <ul>
          {this.state.tests.map(test =>
            <li key="test">{test}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
