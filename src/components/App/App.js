import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Header from './../Header/Header';
import LoginView from './../routes/Login';
import DashboardView from './../routes/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="routes">
          <Header />
          <Redirect from="" exact to="/login" />
          <Route path="/login" component={LoginView} />
          <Route path="/register" render={() => (<h1>Register page</h1>)} />
          <Route path="/dashboard" component={DashboardView} />
          <Route path="/details/:sourceId" render={() => (<h1>Detail Page</h1>)} />
        </div>
      </Router>
    );
  }
}

export default App;
