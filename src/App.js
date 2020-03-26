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
import Clock from "react-live-clock";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <div className="App">
      <Card className="card-spacing">
        <CardBody>
          <Card className="card-spacing">
            <CardBody>
              <h2>WhenIsBriefing.com ?</h2>
              <h3>
                Current Time:{" "}
                <Clock
                  format={"HH:mm:ss"}
                  ticking={true}
                  timezone={"US/Mountain"}
                />
              </h3>
            </CardBody>
          </Card>
          <Card className="card-spacing">
            <CardBody>
              <Form>
                <FormGroup size="sm">
                  <InputGroup>
                    <InputGroupAddon type="prepend" size="sm">
                      <InputGroupText size="sm">Above The Wing:</InputGroupText>
                    </InputGroupAddon>
                    {/* <label htmlFor="#AboveTheWing">Above The Wing: </label> */}
                    <FormInput
                      type="time"
                      min="09:00"
                      max="18:00"
                      id="#AboveTheWing"
                      placeholder="09:00"
                    />
                    <Button size="sm"> Update </Button>
                    <br />
                  </InputGroup>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Card className="card-spacing">
            <CardBody>
              <Form>
                <FormGroup size="sm">
                  <InputGroup size="sm">
                    <InputGroupAddon type="prepend" size="sm">
                      <InputGroupText>Below The Wing:</InputGroupText>
                    </InputGroupAddon>
                    {/* <label htmlFor="#BelowTheWing">Below The Wing:</label> */}
                    <FormInput
                      type="time"
                      min="09:00"
                      max="18:00"
                      id="#BelowTheWing"
                      placeholder="09:15"
                    />
                    <Button size="sm"> Update </Button>
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
                    <InputGroupText>Location:</InputGroupText>
                  </InputGroupAddon>
                  <FormSelect size="sm">
                    <option value="Training Room 3">Training Room 3</option>
                    <option value="Training Room 2">Training Room 2</option>
                  </FormSelect>
                  <Button size="sm">Update</Button>
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
