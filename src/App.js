import React, { Component } from 'react';
import './App.css';
import TempCardList from './components/TempCardList';
import NavBar from './components/NavBar';
import { temps } from './temps';
import {
  Container,
  Input,
  FormGroup,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form
} from 'reactstrap';
class App extends Component {
  state = {
    formModal: false,
    value: {
      ...temps.map(val => {
        return val.id;
      })
    },
    minTemp: {
      ...temps.map(val => {
        return val.rangemin;
      })
    },
    maxTemp: {
      ...temps.map(val => {
        return val.rangemax;
      })
    }
  };

  toggleForm = () => {
    this.setState(prevState => ({
      formModal: !prevState.formModal
    }));
  };

  handleMinTempChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleMaxTempChange = e => {
  //   let newSeries = [
  //     this.props.temperature,
  //     this.props.hum,
  //     this.props.rangemin,
  //     e.target.value
  //   ];
  //   this.setState({ series: newSeries });
  // };

  // handleInputChange = e => {

  //   this.setState({[e.target.name]: e.target.value})
  // }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   alert('Thermometer Updated');
  // };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <TempCardList temps={temps} />
          <Modal
            isOpen={this.state.formModal}
            toggle={this.toggleForm}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleForm}>
              Change Temperature Range
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="exampleSelect">Select Device</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    {temps.map(val => {
                      return <option key={val._id}>{val.id}</option>;
                    })}
                  </Input>
                </FormGroup>
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
                <Button color="primary">Update Thermometer</Button>
              </Form>
            </ModalBody>
          </Modal>
          <Button
            className="btn-form"
            color="success"
            onClick={this.toggleForm}
          >
            Change Range
          </Button>
        </Container>
      </div>
    );
  }
}

export default App;
