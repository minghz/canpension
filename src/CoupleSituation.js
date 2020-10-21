import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Tabs } from "antd";
import VariablesCouple from "./VariablesCouple";
import Constants from "./Constants";
import CalculationsCouple from "./CalculationsCouple";
import { fmtCents } from "./formatters/money.js";

const { TabPane } = Tabs;


class CoupleSituation extends Component {
  constructor(props) {
    super(props)

    let constants = {
      maxOas: 61414,
      maxGis: 55218
    }

    let variables = {
      yearsInCanada: 40,
      yearsSpouseInCanada: 40,
      annualIncome: 0
    }

    this.state = {
      constants: constants,
      variables: variables,

      gisQualified: true
    }
  }

  handleVariableChange = (newVariables) => {
    this.setState({variables: newVariables})
  }

  handleGisQualification = (isQualified) => {
    this.setState({gisQualified: isQualified})
  }

  render() {
    return(
      <>
        <h1> If you have a spouse or common-law partner</h1>
        <Tabs size="large" type="card">
          <TabPane tab="Spouse receive OAS" key="1">

            <VariablesCouple
              data={this.state.variables}
              onChange={this.handleVariableChange}
              onQualifyGis={this.handleGisQualification}
            />

            <Constants data={this.state.constants} />

            <CalculationsCouple
              constants={this.state.constants}
              variables={this.state.variables}
              gisQualified={this.state.gisQualified} />

          </TabPane>
          <TabPane tab="Spouse receives the Allowance" key="3"></TabPane>
          <TabPane tab="Spouse does not receive OAS or Allowance" key="2"></TabPane>
        </Tabs>


        <Row>
          <Col span={12}>
          </Col>
          <Col span={12}>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          </Col>
        </Row>
      </>
    );
  }
}

export default CoupleSituation;
