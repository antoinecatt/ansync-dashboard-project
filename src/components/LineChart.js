import React, { Component } from 'react';
import Chart from 'react-apexcharts';
class LineChart extends Component {
  state = {
    options: {
      chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: [
          'Living Room',
          'Office',
          'Bedroom 1',
          'Bedroom 2',
          'Bedroom 3',
          'Studio',
          'Kitchen',
          'Family Room',
          'Dining Area',
          'Play Room'
        ]
      },
      fill: {
        colors: ['#F44336']
      },
      dataLabels: {
        enabled: false
      },

      title: {
        text: 'Temperature By Room',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: '25px'
        }
      }
    },
    series: [
      {
        name: 'Temperature',
        data: [65,72,82,90,85,80,70,64,53,51]
      }
    ]
  };

  render() {
    return (
      <div>
        <Chart series={this.state.series} options={this.state.options} />
      </div>
    );
  }
}

export default LineChart;
