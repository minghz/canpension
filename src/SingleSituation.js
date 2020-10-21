import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';

import Variables from "./Variables";
import Constants from "./Constants";
import Calculations from "./Calculations";


class SingleSituation extends Component {
  constructor(props) {
    super(props)

    let constants = {
      maxOas: 61414,
      maxGis: 91729,
    }

    let variables = {
      yearsInCanada: 40,
      annualIncome: 0
    }

    this.state = {
      constants: constants,
      variables: variables,

      gisQualified: true
    }
  }

  handleVariableChange = (newVariables) => {
    this.setState({variables: newVariables});
  }

  handleGisQualification = (isQualified) => {
    this.setState({gisQualified: isQualified})
  }

  render() {
    return(
      <>
        <h1>If you are a single, widowed or divorced pensioner</h1>
        <Row>
          <Col span={12}>
            <Variables
              data={this.state.variables}
              onChange={this.handleVariableChange}
              onQualifyGis={this.handleGisQualification}/>
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
              gisQualified={this.state.gisQualified} />
          </Col>
        </Row>
      </>
    )
  }
}

export default SingleSituation;
