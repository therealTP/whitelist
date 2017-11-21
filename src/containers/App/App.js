import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginView from '../Login';
import LoginRoute from '../LoginRoute';
import RegisterView from '../Register';
import DashboardView from '../Dashboard';
import SourceDetailView from '../SourceDetail';
import AuthedLayout from '../AuthedLayout';
import PublicLayout from '../PublicLayout';
import AuthedRoute from '../AuthedRoute';

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
    { path: '/',
      component: DashboardView,
      exact: true
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
  state = {
    isLoggedIn: false,
    user: {
      id: "12345",
      name: "Leroy Brown",
      role: "USER" // "user", "admin", or undefined for logged out
    },
    preloading: true
  };
  
  constructor(props) {
    super(props);
    this.onLoggedIn = this.setAuthedState.bind(this); 
  }

  setAuthedState() {
    this.setState({isLoggedIn: true});
  }

  componentDidMount() {
    if (!this.state.isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      // dispatch(setRedirectUrl(currentURL))
      // browserHistory.replace("/login")
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <PublicLayout authed={this.state.isLoggedIn}>
            <LoginRoute onLoggedIn={this.onLoggedIn} />
            {/* {routes.public.map((route, i) => (
              <Route onLoggedIn={this.onLoggedIn} key={i} path={route.path} component={route.component} />
            ))} */}
          </PublicLayout>
          <AuthedLayout authed={this.state.isLoggedIn}>
            {routes.authed.map((route, i) => (
              <AuthedRoute key={i} route={route} />
            ))}
          </AuthedLayout>
        </Switch>
      </Router>
    );
  }
}

export default App;
