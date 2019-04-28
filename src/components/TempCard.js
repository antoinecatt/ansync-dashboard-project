import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {Button} from 'reactstrap'
// TODO: ADD BOOTSTRAP FOR CARD UI, INSERT RADIALBARCHART INSIDE CARD, RENDER CARD INFO
// ADD FUNCTIONALITY TO CARD TO CHANGE RANGEMAX AND RANGEMIN
// ADD FUNCTIONALITY TO CARD TO CHANGE TEMPERATURE AND UPDATE IN LINE GRAPH
class Temperature extends Component {

state = {

}

  render() {
    const { id, temp, rangemax, rangemin, hum } = this.props;

    return (
      <div>
        <ul>
          <li>{id}</li>
          <li>{temp}</li>
          <li>{rangemax}</li>
          <li>{rangemin}</li>
          <li>{hum}</li>
        </ul>
      </div>
    );
  }
}

export default Temperature;
