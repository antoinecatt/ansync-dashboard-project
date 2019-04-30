import React, { Component } from 'react';
import './App.css';
import TempCardList from './components/TempCardList';
import NavBar from './components/NavBar';
import axios from 'axios';
import { Container } from 'reactstrap';
class App extends Component {
  state = {
    temps: []
  };

  componentDidMount() {
    axios
      .get('http://a.iot.ansync.com:8080/api/all')
      .then(response => this.setState({temps: response.data}));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <TempCardList temps={this.state.temps} />
        </Container>
      </div>
    );
  }
}

export default App;
