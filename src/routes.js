import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Register from './pages/Register';
import RegisterProfile from './pages/RegisterProfile';
import Profile from './pages/Profile';
import Connect from './pages/Connect';

import Sidebar from './components/Sidebar';

function Routes() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/cadastro' exact component={Register} />
        <Route path='/cadastro-perfil' component={RegisterProfile} />
        <Route path='/perfil' component={Profile} />
        <Route path='/conectar' component={Connect} />
      </Switch>
    </Router>
  );
}

export default Routes;
