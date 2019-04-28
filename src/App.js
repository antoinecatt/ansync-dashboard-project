import React, { Component } from 'react';
import './App.css';
import TempCardList from './components/TempCardList';
import { temps } from './temps';
class App extends Component {
  render() {
    return (
      <div className="container">
        <TempCardList temps={temps} />
      </div>
    );
  }
}

export default App;
