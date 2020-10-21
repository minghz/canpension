import React from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Card, Row, Col } from "antd";
import { fmtCents } from "./formatters/money.js";


function Calculations(props) {

  const oas = props.oasCalculator(props.variables.yearsInCanada, props.constants.maxOas);
  const gis = props.gisCalculator(props.variables.annualIncome, props.constants.maxGis);
  const gisQualified = props.gisQualificator(props.variables.annualIncome)

  const receivableGisRow = () => {
    if(gisQualified) {
      return(
        <Row>
          <Col span={8}>Receivable GIS</Col>
          <Col span={8}>{fmtCents(props.constants.maxGis)} - {fmtCents(props.variables.annualIncome)} * 1yr/12mo/2</Col>
          <Col span={1}>=</Col>
          <Col span={7}>{fmtCents(gis)} /mo</Col>
        </Row>
      )
    } else {
      return(
        <Row>
          <Col span={8}>Receivable GIS</Col>
          <Col span={8}>Income is, or exceeded $18,624.00</Col>
          <Col span={1}>=</Col>
          <Col span={7}>{fmtCents(0)} /mo</Col>
        </Row>
      )
    }
  }

  return(
    <Card title="Calculations">
      <Row>
        <Col span={8}>Receivable OAS</Col>
        <Col span={8}>{props.variables.yearsInCanada}/40 * {fmtCents(props.constants.maxOas)}</Col>
        <Col span={1}>=</Col>
        <Col span={7}>{fmtCents(oas)} /mo</Col>
      </Row>
      {receivableGisRow()}
      <Row>
        <Col span={8}></Col>
        <Col span={8} className="textAlignRight bold">Total</Col>
        <Col span={1}></Col>
        <Col span={7} className="bold">{fmtCents(oas + gis)} /mo</Col>
      </Row>
    </Card>
  );
}

export default Calculations;
