import React from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Card, Row, Col } from "antd";
import { fmtCents } from "./formatters/money.js";

import { SINGLE_TABLE_URL } from "./constants/urls"

function Calculations(props) {

  const oas = props.oasCalculator(props.variables.yearsInCanada, props.constants.maxOas);
  const gis = props.gisCalculator(props.variables.annualIncome, oas, props.constants.standardIncome);

  return(
    <Card title="Calculations">
      <Row>
        <Col span={8}>Receivable OAS</Col>
        <Col span={8}>{props.variables.yearsInCanada}/40 * {fmtCents(props.constants.maxOas)}</Col>
        <Col span={1}>=</Col>
        <Col span={7}>{fmtCents(oas)} /mo</Col>
      </Row>
      <Row>
          <Col span={8}>Receivable GIS</Col>
          <Col span={8}><a href={SINGLE_TABLE_URL} target="_blank">From lookup tables [1]</a></Col>
          <Col span={1}>=</Col>
          <Col span={7}>{fmtCents(gis)} /mo</Col>
        </Row>
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
