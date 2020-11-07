import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from "antd";
import Variables2 from "./Variables2";
import Constants from "./Constants";
import Calculations2 from "./Calculations2";

import { receivableOas } from "./services/oasCalculator";
import { receivableGis } from "./services/coupleWithOasGisLookup";

class CoupleWithOas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      constants: {
        maxOas: 61414,
        defaultGis: 55218,
        standardIncome: 116632
      },
      variables: {
        yearsInCanada: 40,
        yearsSpouseInCanada: 40,
        annualIncome: 0
      },
    }
  }

  handleVariableChange = (newVariables) => {
    this.setState({variables: newVariables})
  }

  render() {
    return(
      <>
        <Row>
          <Col span={12}>
            <Variables2
              data={this.state.variables}
              onChange={this.handleVariableChange} />
          </Col>
          <Col span={12}>
            <Constants data={this.state.constants} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Calculations2
              constants={this.state.constants}
              variables={this.state.variables}
              oasCalculator={receivableOas}
              gisLookup={receivableGis}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default CoupleWithOas;
