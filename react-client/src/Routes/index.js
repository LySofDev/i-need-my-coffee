import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const HomePage = props => (<Home />);

export default props => (
  <Switch>
    <Route path="/" exact render={HomePage} />
  </Switch>
);
