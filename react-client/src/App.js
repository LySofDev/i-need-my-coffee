import React, { Component } from 'react';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import history from './history';
import ContextProviders from './ContextProviders';
import Flash from './Flash';

class App extends Component {
  render() {
    return (
      <Router history={history} >
        <ContextProviders>
          <Routes />
          <Flash />
        </ContextProviders>
      </Router>
    );
  }
}

export default App;
