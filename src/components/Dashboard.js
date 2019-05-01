import React, { Component } from 'react';
import TempCardList from './TempCardList';
import SearchBox from './SearchBox';
// import { temps } from '../temps';
import axios from 'axios';

class Dashboard extends Component {
  state = {
    temps: [],
    isLoaded: false,
    searchField: ''
  };

  componentDidMount() {
    axios
      .get('http://a.iot.ansync.com:8080/api/all')
      .then(response =>
        this.setState({ temps: response.data, isLoaded: true })
      );
  }

  searchChangeHandler = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filterDevice = this.state.temps.filter(device => {
      return device.id
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>DASHBOARD</h1>
            <SearchBox searchChange={this.searchChangeHandler} />
            <TempCardList temps={filterDevice}/>
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
