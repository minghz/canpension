import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

import Variables from "./Variables";
import Constants from "./Constants";
import Calculations from "./Calculations";

import * as single from "./services/calculations";

class SingleSituation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      constants: {
        maxOas: 61414,
        maxGis: 91729,
      },
      variables: {
        yearsInCanada: 40,
        annualIncome: 0
      }
    }
  }

  handleVariableChange = (newVariables) => {
    this.setState({variables: newVariables});
  }

  render() {
    return(
      <>
        <h1>If you are a single, widowed or divorced pensioner</h1>
        <Row>
          <Col span={12}>
            <Variables
              data={this.state.variables}
              onChange={this.handleVariableChange} />
          </Col>
          <Col span={12}>
            <Constants data={this.state.constants} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Calculations
              constants={this.state.constants}
              variables={this.state.variables}
              oasCalculator={single.receivableOas}
              gisCalculator={single.receivableGis}
              gisQualificator={single.isGisQualified}
            />
          </Col>
        </Row>
      </>
    )
  }
}

export default SingleSituation;
