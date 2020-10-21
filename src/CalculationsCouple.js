import React from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Card, Row, Col } from "antd";
import { fmtCents } from "./formatters/money.js";


function CalculationsCouple(props) {

  const receivableOas = () => (props.variables.yearsInCanada/40) * props.constants.maxOas
  const receivableGis = () =>
    props.gisQualified ? (props.constants.maxGis - props.variables.annualIncome/12/4) : 0

  const receivableGisRow = () => {
    if(props.gisQualified) {
      return(
        <Row>
          <Col span={8}>Receivable GIS</Col>
          <Col span={8}>{fmtCents(props.constants.maxGis)} - {fmtCents(props.variables.annualIncome)} * 1yr/12mo/4</Col>
          <Col span={1}>=</Col>
          <Col span={7}>{fmtCents(receivableGis())} /mo</Col>
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
        <Col span={7}>{fmtCents(receivableOas())} /mo</Col>
      </Row>
      {receivableGisRow()}
      <Row>
        <Col span={8}></Col>
        <Col span={8} className="textAlignRight bold">Total</Col>
        <Col span={1}></Col>
        <Col span={7} className="bold">{fmtCents(receivableOas() + receivableGis())} /mo</Col>
      </Row>
    </Card>
  );
}

export default CalculationsCouple;
