import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

const App = () => {
  return (
    <div>
      <Dashboard />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
        <Route component={About} />
      </Switch>
    </div>
  );
};

export default App;
