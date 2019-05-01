import React, { Component } from 'react';
import TempCardList from './TempCardList';
import axios from 'axios';

class Dashboard extends Component {
  state = {
    temps: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('http://a.iot.ansync.com:8080/api/all')
      .then(response =>
        this.setState({ temps: response.data, isLoaded: true })
      );
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>DASHBOARD</h1>
            <TempCardList temps={this.state.temps} />
          </div>
        ) : (
          <div>
            <div className="loader" />
            <h1>LOADING DASHBOARD...</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;