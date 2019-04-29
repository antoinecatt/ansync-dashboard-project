import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import LineChart from './LineChart';
import {
  Card,
  CardTitle,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
// ADD FUNCTIONALITY TO CARD TO CHANGE RANGEMAX AND RANGEMIN
// ADD FUNCTIONALITY TO CARD TO CHANGE TEMPERATURE AND UPDATE IN LINE GRAPH
// FIX STATTE HANDLERS
class Temperature extends Component {
  state = {
    historyModal: false,
    formModal: false,
    dropdownOpen: false,
    options: {
      plotOptions: {
        radialBar: {
          offsetY: -10,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: -5,
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
      labels: ['Current Temp ºF', 'Humidity %', 'Min Temp ºF', 'Max Temp ºF'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 5,
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

  toggleHistory = () => {
    this.setState(prevState => ({
      historyModal: !prevState.historyModal
    }));
  };

  toggleForm = () => {
    this.setState(prevState => ({
      formModal: !prevState.formModal
    }));
  };

  handleMinTempChange = e => {
    let newSeries = [
      this.props.temperature,
      this.props.hum,
      e.target.value,
      this.props.rangemax
    ];

    this.setState({ series: newSeries });
  };

  handleMaxTempChange = e => {
    let newSeries = [
      this.props.temperature,
      this.props.hum,
      this.props.rangemin,
      e.target.value
    ];

    this.setState({ series: newSeries });
  };

  clickHandler = e => {
    e.preventDefault();
    console.log(this.state.series);
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

          <Button className="btn" color="info" onClick={this.toggleHistory}>
            History
          </Button>
          <Modal
            isOpen={this.state.historyModal}
            toggle={this.toggleHistory}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleHistory}>History</ModalHeader>
            <ModalBody>
              <LineChart series={this.props.series} />
            </ModalBody>
          </Modal>

          <Button className="btn" color="success" onClick={this.toggleForm}>
            Change Range
          </Button>

          <Modal
            isOpen={this.state.formModal}
            toggle={this.toggleForm}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleForm}>
              Change Temperature Range
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="minTemp">Minimum Temperature</Label>
                  <Input
                    onChange={this.handleMinTempChange}
                    type="number"
                    name="minTemp"
                    id="exampleNumber"
                    placeholder="Min Temp"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="maxTemp">Max Temperature</Label>
                  <Input
                    onChange={this.handleMaxTempChange}
                    type="number"
                    name="minTemp"
                    id="exampleNumber"
                    placeholder="Max Temp"
                  />
                </FormGroup>
                <Button color="primary" onClick={this.clickHandler}>
                  Update Thermostat
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </Card>
      </Col>
    );
  }
}

export default Temperature;
