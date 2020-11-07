import React, { Component } from 'react';
import { Card, Row, Col, InputNumber } from "antd";
import 'antd/dist/antd.css';
import './css/App.css';

import { fmtCents } from './formatters/money'

//function showYearsError() {
//  let e = document.getElementsByClassName("yearsInCanada")[0]
//  e.classList.add('inputError')
//}
//
//function clearYearsError() {
//  let e = document.getElementsByClassName("yearsInCanada")[0]
//  e.classList.remove('inputError')
//}

class Variables extends Component {

  onYearsChange = (newYears) => {
    const years = newYears > 40 ? 40 : newYears

    this.props.onChange(
      Object.assign(this.props.data, {yearsInCanada: years})
    );
  }

  onIncomeChange = (newIncome) => {
    this.props.onChange(
      Object.assign(this.props.data, {annualIncome: newIncome})
    );
  }

  render() {
    return(
      <Card title="Variables">
        <Row>
          <Col span={16}>Years lived in Canada</Col>
          <Col span={8}>
            <InputNumber
              className="numberInput"
              size="large"
              defaultValue={this.props.data.yearsInCanada}
              min={10}
              onChange={this.onYearsChange}
            />
          </Col>
        </Row>
        <Row>
          <Col span={16}>Annual Income (excluding OAS)</Col>
          <Col span={8}>
            <InputNumber
              className="numberInput"
              size="large"
              defaultValue={this.props.data.annualIncome}
              step={100}
              min={0}
              formatter={value => fmtCents(value)}
              parser={value => 100 * value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onIncomeChange}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Variables;
