import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginView from '../Login';
import RegisterView from '../Register';
import DashboardView from '../Dashboard';
import SourceDetailView from '../SourceDetail';
import AuthedLayout from '../AuthedLayout';
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
    user: {
      id: "12345",
      name: "Leroy Brown",
      role: "user" // "user", "admin", or undefined for logged out
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          {routes.public.map((route, i) => (
            <Route key={i} path={route.path} component={route.component} />
          ))}
          <AuthedLayout>
            {routes.authed.map((route, i) => (
              <AuthedRoute role={this.state.user.role} key={i} route={route} />
            ))}
          </AuthedLayout>
        </Switch>
      </Router>
    );
  }
}

export default App;
