import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Row, Col } from "antd";
import Prerequesites from "./Prerequesites";
import References from "./References";
import Variables from "./Variables";
import Constants from "./Constants";
import Calculations from "./Calculations";

const constants = {
  maxOas: 61414,
  maxGis: 91729
}

class App extends Component {
  constructor(props) {
    super(props);

    let variables = {
      yearsInCanada: 40,
      annualIncome: 0
    }

    this.state = {
      eligible: true, // TODO: false by default
      constants: constants,
      variables: variables
    }

  }

  handleVariableChange = (newVariables) => {
    this.setState({variables: newVariables});
  }

  render() {
    return (
      <>
        <Row>
          <Col span={8}><Prerequesites /></Col>
          <Col span={8}><References /></Col>
        </Row>
        <h1>If you are a single, widowed or divorced pensioner</h1>
        <Row>
          <Col span={7}>
            <Variables
              data={this.state.variables}
              onChange={this.handleVariableChange} />
          </Col>
          <Col span={7}>
            <Constants data={this.state.constants} />
          </Col>
          <Col span={10}>
            <Calculations
              constants={this.state.constants}
              variables={this.state.variables} />
          </Col>
        </Row>
        <Row>
        </Row>
      </>
    );
  }
}

export default App;
