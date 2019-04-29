import React, { Component } from 'react';
import './App.css';
import TempCardList from './components/TempCardList';
import NavBar from './components/NavBar';
import { temps } from './temps';
// import axios from 'axios';
import {
  Container
  // Input,
  // FormGroup,
  // Label,
  // Button,
  // Modal,
  // ModalHeader,
  // ModalBody,
  // Form
} from 'reactstrap';
class App extends Component {
  // state = {
  //   tempData: [],
  //   isPending: true,
  //   formModal: false,
  //   value: {
  //     ...temps.map(val => {
  //       return val.id;
  //     })
  //   },
  //   minTemp: {
  //     ...temps.map((val, i) => {
  //       return val.rangemin;
  //     })
  //   },
  //   maxTemp: {
  //     ...temps.map(val => {
  //       return val.rangemax;
  //     })
  //   }
  // };

  // toggleForm = () => {
  //   this.setState(prevState => ({
  //     formModal: !prevState.formModal
  //   }));
  // };

  // handleTempChange = e => {
  //   console.log(e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleDeviceChange = e => {
  //   this.setState({ value: e.target.value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   alert('Thermometer Updated');
  // };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <TempCardList
            temps={temps}
            minTemp={this.state.minTemp}
            maxTemp={this.state.maxTemp}
            value={this.state.value}
          />
          {/* <Modal
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
                  <Input
                    onChange={this.handleDeviceChange}
                    value={this.state.value}
                    type="select"
                    name="select"
                    id="exampleSelect"
                  >
                    <option value="demo1">Demo 1</option>
                    <option value="demo2">Demo 2</option>
                    <option value="demo3">Demo 3</option>
                    <option value="demo4">Demo 4</option>
                    <option value="demo5">Demo 5</option>
                    <option value="demo6">Demo 6</option>
                    <option value="demo7">Demo 7</option>
                    <option value="demo8">Demo 8</option>
                    <option value="demo9">Demo 9</option>
                    <option value="demo10">Demo 10</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="minTemp">Minimum Temperature</Label>
                  <Input
                    onChange={this.handleTempChange}
                    type="number"
                    name="minTemp"
                    id="exampleNumber"
                    placeholder="Min Temp"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="maxTemp">Max Temperature</Label>
                  <Input
                    onChange={this.handleTempChange}
                    type="number"
                    name="maxTemp"
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
            Change Temperature Range
          </Button> */}
        </Container>
      </div>
    );
  }
}

export default App;
