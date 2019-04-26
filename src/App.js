import React, { Component } from 'react';
import './App.css';
import TempCardList from './components/TempCardList';
import LineChart from './components/LineChart';
import { temps } from './temps';
class App extends Component {

  render() {
    return (
      <div className="container">
        <LineChart temps={temps}/>
        <TempCardList temps={temps} />
      </div>
    );
  }
}

export default App;
