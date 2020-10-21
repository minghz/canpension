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

class VariablesCouple extends Component {

  onYearsChange = (newYears) => {
    if(newYears > 40) {
      this.props.onChange(
        {
          yearsInCanada: 40,
          yearsSpouseInCanada: this.props.data.yearsSpouseInCanada,
          annualIncome: this.props.data.annualIncome
        }
      )
      return // ignore anything larger than 40
    }

    this.props.onChange(
      {
        yearsInCanada: newYears,
        yearsSpouseInCanada: this.props.data.yearsSpouseInCanada,
        annualIncome: this.props.data.annualIncome
      }
    );
  }

  onSpouseYearsChange = (newYears) => {
    if(newYears > 40) {
      this.props.onChange(
        {
          yearsInCanada: this.props.data.yearsInCanada,
          yearsSpouseInCanada: 40,
          annualIncome: this.props.data.annualIncome
        }
      )
      return // ignore anything larger than 40
    }

    this.props.onChange(
      {
        yearsInCanada: this.props.data.yearsInCanada,
        yearsSpouseInCanada: newYears,
        annualIncome: this.props.data.annualIncome
      }
    );
  }


  onIncomeChange = (newIncome) => {
    // Your annual income plus the annual income of your spouse/common-law partner must be
    // Less than $24,576
    if(newIncome >= 2457600) { this.props.onQualifyGis(false) }
    else { this.props.onQualifyGis(true) }

    this.props.onChange(
      {
        yearsInCanada: this.props.data.yearsInCanada,
        yearsSpouseInCanada: this.props.data.yearsSpouseInCanada,
        annualIncome: newIncome
      }
    );
  }

  render() {
    return(
      <Card title="Variables">
        <Row>
          <Col span={16}>Years you have lived in Canada</Col>
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
          <Col span={16}>Years your spouse has lived in Canada</Col>
          <Col span={8}>
            <InputNumber
              className="yearsInCanada"
              size="large"
              defaultValue={this.props.data.yearsSpouseInCanada}
              min={10}
              onChange={this.onSpouseYearsChange}
            />
          </Col>
        </Row>
        <Row>
          <Col span={16}>Annual Household Income (excluding OAS)</Col>
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

export default VariablesCouple;
