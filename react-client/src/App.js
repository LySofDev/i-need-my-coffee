import React, { Component } from 'react';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import history from './history';
import ContextProviders from './ContextProviders';

class App extends Component {
  render() {
    return (
      <Router history={history} >
        <ContextProviders>
          <Routes />
        </ContextProviders>
      </Router>
    );
  }
}

export default App;
