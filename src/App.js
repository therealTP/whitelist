import React, { Component } from 'react';
import Sidebar from './Sidebar';

import logo from './logo.svg';
import './App.css';

const myHeaders = new Headers();

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'no-cache'};

class App extends Component {
  state = {
    tests: ['test1', 'test2', 'test3', 'test4'],
    sources: []
  }
  
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    fetch(
      'http://localhost:9000/source?limit=10', myInit
    ).then(res => {
      console.log("WOOPS", res);
      return res.json();
    }).then(data => {
      console.log("DATA", data);
      this.setState({sources: data.response.results});
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
        <ul>
          {this.state.sources.map(source =>
            <li key={source.id}>{source.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
