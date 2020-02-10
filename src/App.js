import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form, Row, Label, Button } from "reactstrap";

function App() {
  return (
    <div className="container">
      <header>
        <h2>Sample Form</h2>
      </header>
      <Form class="form-inline">
        <Label for="email" class="mr-sm-2">
          Email address:
        </Label>
        <input
          type="email"
          class="form-control mb-2 mr-sm-2"
          placeholder="Enter email"
          id="email"
        />
        <Label for="pwd" class="mr-sm-2">
          Password:
        </Label>
        <input
          type="password"
          class="form-control mb-2 mr-sm-2"
          placeholder="Enter password"
          id="pwd"
        />
        <div class="form-check mb-2 mr-sm-2">
          <Label class="form-check-label">
            <input class="form-check-input" type="checkbox" /> Remember me
          </Label>
        </div>
        <Button type="submit" class="btn btn-primary mb-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
