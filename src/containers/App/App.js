import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginView from '../Login';
import LoginRoute from '../LoginRoute';
import RegisterView from '../Register';
import DashboardView from '../Dashboard';
import SourceDetailView from '../SourceDetail';
import AuthedLayout from '../AuthedLayout';
import PublicLayout from '../PublicLayout';
import AuthedRoute from '../AuthedRoute';
import UserRoute from '../UserRoute';
import PublicRoute from '../PublicRoute';
import { get } from './../../services/fetch';
import Preloader from './../../stateless/Preloader/Preloader';

// Main Routing. https://reacttraining.com/react-router/web/example/route-config
const routes = {
  public: [
    { path: '/login',
    component: LoginView,
    },
    { path: '/register',
      component: RegisterView,
    }
  ],
  authed: [
    { path: '/dashboard',
      component: DashboardView
    },
    { path: '/source/:sourceId',
      component: SourceDetailView
    },
    {
      path: '/admin',
      component: SourceDetailView,
      admin: true
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {
        id: "12345",
        name: "Leroy Brown",
        role: "USER" // "user", "admin", or undefined for logged out
      },
      preloading: true
    };
    this.onLoggedIn = this.setAuthedState.bind(this); 
  }

  setAuthedState() {
    this.setState({isLoggedIn: true});
  }

  componentDidMount() {
    // get initial user auth data:
    get('/users/auth')
    .then(data => {
      this.setState({
        isLoggedIn: true,
        preloading: false
      });
    })
    .catch(err => {
      this.setState({
        preloading: false
      });
    });
  }

  render() {
    const authed = this.state.isLoggedIn;
    const preload = this.state.preloading;

    if (preload) {
      return <Preloader />
    }

    return (
      <Router>
        <div>
          <LoginRoute authed={ authed } onLoggedIn={this.onLoggedIn} />
          <UserRoute path='/' exact component={ DashboardView } authed={ authed } />
        </div>
      </Router>
    );
  }
}

export default App;
