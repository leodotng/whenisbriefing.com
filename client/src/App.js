import React, { Component } from "react";
import ReactDOM from "react-dom";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.statusText())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <Card className="Card-spacing">
          <CardBody className="Card-spacing">
            <Card className="Card-spacing">
              <CardBody className="Card-spacing">
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
            <Card className="Card-spacing">
              <CardBody className="Card-spacing">
                <Form>
                  <FormGroup size="sm">
                    <InputGroup>
                      <InputGroupAddon type="prepend" size="sm">
                        <InputGroupText size="sm">
                          Above The Wing:
                        </InputGroupText>
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
            <Card className="Card-spacing">
              <CardBody className="Card-spacing">
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
            <Card className="Card-spacing">
              <CardBody className="Card-spacing">
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
        <p className="App-intro">{this.state.apiResponse}</p>
        </div>
    );
  }
}

export default App;
