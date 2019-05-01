import React from 'react';
import RadarChart from './RadarChart';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap';

import profilePic from '../assets/spiderman.jpg';

const clickHandler = e => {
  e.preventDefault();
  alert('Profile updated!');
};

const Settings = () => {
  return (
    <div>
      <h1>SETTINGS</h1>
      {/* CARD INFO */}
      <CardDeck className="CardDeck">
        <Card className="Card-info-settings">
          <CardImg
            className="CardImg"
            top
            width="100%"
            src={profilePic}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h3>Spiderman</h3>
            </CardTitle>
            <CardSubtitle>
              <h5>Web Developer</h5>
            </CardSubtitle>
          </CardBody>
        </Card>
        <Card className="Card-info-settings">
          <CardBody>
            <CardTitle><h3>Activity</h3></CardTitle>
            <RadarChart />
          </CardBody>
        </Card>
      </CardDeck>
      {/* FORM */}
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="dev@radialinc.com"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="************"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            type="text"
            name="address"
            id="exampleAddress"
            placeholder="1234 Main St"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input
            type="text"
            name="address2"
            id="exampleAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input
                type="text"
                name="city"
                id="exampleCity"
                placeholder="Sacramento"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input
                type="text"
                name="state"
                id="exampleState"
                placeholder="CA"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input
                type="text"
                name="zip"
                id="exampleZip"
                placeholder="95819"
              />
            </FormGroup>
          </Col>
        </Row>

        <Button color="success" onClick={clickHandler}>
          Update Profile
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
