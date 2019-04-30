import React, { Component } from 'react';
import './App.css';
import './Loader.css';
import TempCardList from './components/TempCardList';
import NavBar from './components/NavBar';
import axios from 'axios';
import { Container } from 'reactstrap';
class App extends Component {
  state = {
    temps: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('http://a.iot.ansync.com:8080/api/all')
      .then(response => this.setState({ temps: response.data, isLoaded: true }));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          { this.state.isLoaded ?

            <TempCardList temps={this.state.temps} />
            :
            <div>
            <div className="loader" />
            <h1>LOADING DASHBOARD...</h1>
          </div>
            
          }
        </Container>
      </div>
    );
  }
}

export default App;
