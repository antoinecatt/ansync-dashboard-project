import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import LineChart from './LineChart';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
// ADD FUNCTIONALITY TO CARD TO CHANGE RANGEMAX AND RANGEMIN
// SHOW HISTORY BY ADDING MODAL
// ADD FUNCTIONALITY TO CARD TO CHANGE TEMPERATURE AND UPDATE IN LINE GRAPH
class Temperature extends Component {
  state = {
    modal: false,
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
        offsetX: 30,
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
    series: [
      this.props.temperature,
      this.props.hum,
      this.props.rangemin,
      this.props.rangemax
    ]
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Col sm="6">
        <Card body>
          <CardTitle>{this.props.id}</CardTitle>
          <Chart
            series={this.state.series}
            options={this.state.options}
            type="radialBar"
            height="350"
          />

          <Button onClick={this.toggle}>Button</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>History</ModalHeader>
            <ModalBody>
              <LineChart />
            </ModalBody>
          </Modal>
        </Card>
      </Col>
    );
  }
}

export default Temperature;
