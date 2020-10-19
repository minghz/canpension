import React, { Component } from 'react';
import { Card, Row, Col, InputNumber } from "antd";
import 'antd/dist/antd.css';
import './css/App.css';

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
    if(newYears > 40) {
      this.props.onChange(
        {
          yearsInCanada: 40,
          annualIncome: this.props.data.annualIncome
        }
      )
      return // ignore anything larger than 40
    }

    this.props.onChange(
      {
        yearsInCanada: newYears,
        annualIncome: this.props.data.annualIncome
      }
    );
  }

  onIncomeChange = (newIncome) => {
    // If your yearly income, not including your OAS pension, exceeds $18,623.99,
    // you do not qualify for the Guaranteed Income Supplement.
    if(newIncome >= 1862400) { this.props.onQualifyGis(false) }
    else { this.props.onQualifyGis(true) }

    this.props.onChange(
      {
        yearsInCanada: this.props.data.yearsInCanada,
        annualIncome: newIncome
      }
    );
  }

  render() {
    return(
      <Card title="Variables">
        <Row>
          <Col span={16}>Years lived in Canada</Col>
          <Col span={8}>
            <InputNumber
              className="yearsInCanada"
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
              size="large"
              defaultValue={this.props.data.annualIncome}
              step={100}
              min={0}
              formatter={value => `$ ${value/100}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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
