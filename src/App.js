import React from "react";
// import logo from './logo.svg';
import "./App.css";
import {
  Card,
  CardBody,
  Form,
  FormInput,
  FormGroup,
  Button,
  FormSelect,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "shards-react";
import Clock from 'react-live-clock';


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <div className="App">
      <Card className="card-spacing">
        <CardBody>
          <Card className="card-spacing">
            <CardBody>
              <h1>WhenIsBriefing.com ?</h1>
              <h3>Current Time: <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Mountain'} /></h3>
              
            </CardBody>
          </Card>
          <Card className="card-spacing">
            <CardBody>
              <Form>
                <FormGroup size="lg">
                  <InputGroup>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>Above The Wing:</InputGroupText>
                  </InputGroupAddon>
                  {/* <label htmlFor="#AboveTheWing">Above The Wing: </label> */}
                  <FormInput id="#AboveTheWing" placeholder="Above The Wing" />
                  <Button size="large"> Update </Button>
                  <br />
                  </InputGroup>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Card className="card-spacing">
            <CardBody>
              <Form>
                <FormGroup size="lg">
                <InputGroup>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>Below The Wing:</InputGroupText>
                  </InputGroupAddon>
                  {/* <label htmlFor="#BelowTheWing">Below The Wing:</label> */}
                  <FormInput id="#BelowTheWing" placeholder="Below The Wing" />
                  <Button size="large"> Update </Button>
                  <br />
                  </InputGroup>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Card className="card-spacing">
            <CardBody>
              
              <Form>
              <InputGroup>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>Above The Wing:</InputGroupText>
                  </InputGroupAddon>
                <FormSelect size="lg">
                  <option value="Training Room 3">Training Room 3</option>
                  <option value="Training Room 2">Training Room 2</option>
                </FormSelect>
                <Button size="large">Update</Button>
                </InputGroup>
                
              </Form>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
