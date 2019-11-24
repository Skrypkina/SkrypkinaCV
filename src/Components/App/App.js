import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

const App = () => {
  return (
    <div>
      <DocumentTitle title="Home">
        <h1>Resume</h1>
      </DocumentTitle>
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
