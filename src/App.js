import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { temps } from './temps';

function App() {
  return (
    <div className="App">
      <Dashboard temps={temps}/>
    </div>
  );
}

export default App;
