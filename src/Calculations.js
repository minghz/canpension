import React from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Card, Row, Col } from "antd";
import { fmtCents } from "./formatters/money.js";


function Calculations(props) {

  const oas = props.oasCalculator(
    props.variables.yearsInCanada,
    props.constants.maxOas,
    props.variables.annualIncome);

  const gis = props.gisLookup(
    props.variables.annualIncome,
    oas,
    props.constants.standardIncome);

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
          <Col span={8}>
            <a href={props.referenceUrl} target="_blank" rel="noopener noreferrer">
              {props.referenceText}
            </a>
          </Col>
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
