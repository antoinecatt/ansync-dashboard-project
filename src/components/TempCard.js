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
  Input,
  CardGroup,
  CardBody
} from 'reactstrap';
// ADD FUNCTIONALITY TO CARD TO CHANGE RANGEMAX AND RANGEMIN
// ADD FUNCTIONALITY TO CARD TO CHANGE TEMPERATURE AND UPDATE IN LINE GRAPH
// FIX STATTE HANDLERS
class Temperature extends Component {
  state = {
    historyModal: false,
    formModal: false,
    dropdownOpen: false,
    minTemp: this.props.rangemin,
    maxTemp: this.props.rangemax,
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Current Temp ºF']
    },
    series: [this.props.temperature]
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

  changeTempHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <CardGroup className="CardGroup">
            <Card className="CardGroup-info">
              <CardBody>
                <CardTitle>Humidity</CardTitle>
                <h3>{this.props.hum}%</h3>
              </CardBody>
            </Card>
            <Card className="CardGroup-info">
              <CardBody>
                <CardTitle>Min. Temp</CardTitle>
                <h3>{this.state.minTemp}ºF</h3>
              </CardBody>
            </Card>
            <Card className="CardGroup-info">
              <CardBody>
                <CardTitle>Max Temp</CardTitle>
                <h3>{this.state.maxTemp}ºF</h3>
              </CardBody>
            </Card>
          </CardGroup>

          <Button className="btn" color="info" onClick={this.toggleHistory}>
            History
          </Button>
          <Modal
            isOpen={this.state.historyModal}
            toggle={this.toggleHistory}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleHistory}>
              {this.props.id}
            </ModalHeader>
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
              Change Temperature Range For {this.props.id.toUpperCase()}
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="minTemp">Minimum Temperature</Label>
                  <Input
                    onChange={this.changeTempHandler}
                    type="number"
                    name="minTemp"
                    id="exampleNumber"
                    placeholder="Min Temp"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="maxTemp">Max Temperature</Label>
                  <Input
                    onChange={this.changeTempHandler}
                    type="number"
                    name="maxTemp"
                    id="exampleNumber"
                    placeholder="Max Temp"
                  />
                </FormGroup>
                <Button color="primary" onClick={this.toggleForm}>
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
