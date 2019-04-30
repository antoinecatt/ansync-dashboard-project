import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './Loader.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Settings from './components/Settings';

import { Container } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/" component={Dashboard} />
        </Container>
      </div>
    );
  }
}

export default App;
