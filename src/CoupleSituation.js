import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from "antd";
import Variables2 from "./Variables2";
import Constants from "./Constants";
import Calculations2 from "./Calculations2";

import * as single from './services/calculations'

const { TabPane } = Tabs;


class CoupleSituation extends Component {
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
        <Tabs size="large" type="card">
          <TabPane tab="Spouse receive OAS" key="1">

            <Variables2
              data={this.state.variables}
              onChange={this.handleVariableChange}
            />

            <Constants data={this.state.constants} />

            <Calculations2
              constants={this.state.constants}
              variables={this.state.variables}
              oasCalculator={single.receivableOas}
              gisCalculator={single.receivableGis}
            />

          </TabPane>
          <TabPane tab="Spouse receives the Allowance" key="3"></TabPane>
          <TabPane tab="Spouse does not receive OAS or Allowance" key="2"></TabPane>
        </Tabs>

      </>
    );
  }
}

export default CoupleSituation;
