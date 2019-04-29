import React, { Component } from 'react';
import './App.css';
import TempCardList from './components/TempCardList';
import NavBar from './components/NavBar';
import { temps } from './temps';
import { Container } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <TempCardList temps={temps} />
        </Container>
      </div>
    );
  }
}

export default App;
