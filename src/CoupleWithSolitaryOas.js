import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from "antd";
import Variables from "./Variables";
import Constants from "./Constants";
import Calculations from "./Calculations";

import { receivableOas } from "./services/oasCalculator";
import { coupleSolitary as receivableGis } from "./services/gisLookup";

import { COUPLE_SOLITARY_OAS_TABLE_URL } from "./constants/urls"

class CoupleWithSolitaryOas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      constants: {
        maxOas: 61414,
        defaultGis: 91729,
        standardIncome: 153143
      },
      variables: {
        yearsInCanada: 40,
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
              oasCalculator={receivableOas}
              gisLookup={receivableGis}
              referenceText={"From lookup tables [3]"}
              referenceUrl={COUPLE_SOLITARY_OAS_TABLE_URL}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default CoupleWithSolitaryOas;
