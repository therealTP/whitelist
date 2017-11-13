import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Header from './../Header/Header';
import LoginView from './../routes/Login';
import RegisterView from './../routes/Register';
import DashboardView from './../routes/Dashboard';
import SourceDetailView from './../routes/SourceDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
          <Header />
          <Router>
            <div className="routes">
              {/* <Redirect from="/" exact to="/login" /> */}
              <Route path="/login" component={LoginView} />
              <Route path="/register" component={RegisterView} />
              <Route path="/dashboard" component={DashboardView} />
              <Route path="/source/:sourceId" component={SourceDetailView} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
