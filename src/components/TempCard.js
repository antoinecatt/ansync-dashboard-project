import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { Button } from 'reactstrap';
// TODO: ADD BOOTSTRAP FOR CARD UI, INSERT RADIALBARCHART INSIDE CARD, RENDER CARD INFO
// ADD FUNCTIONALITY TO CARD TO CHANGE RANGEMAX AND RANGEMIN
// ADD FUNCTIONALITY TO CARD TO CHANGE TEMPERATURE AND UPDATE IN LINE GRAPH
class Temperature extends Component {
  state = {
    options: {
      plotOptions: {
        radialBar: {
          offsetY: -10,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['Temperature', 'Humidity', 'Min Temp', 'Max Temp'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 10,
        labels: {
          useSeriesColors: true
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 1
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    },
    series: [this.props.temperature, this.props.hum, this.props.rangemin, this.props.rangemax]
  };

  render() {
    const { id, temp, rangemax, rangemin, hum } = this.props;
    console.log(this.props.temperature)
    return (
      <div>
        {/* <ul>
          <li>{id}</li>
          <li>{temp}</li>
          <li>{rangemax}</li>
          <li>{rangemin}</li>
          <li>{hum}</li>
        </ul> */}
      <h3>{id}</h3>
        <Chart series={this.state.series} options={this.state.options} type="radialBar" height="350"/>
      </div>
    );
  }
}

export default Temperature;
