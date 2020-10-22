import React from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Card, Row, Col, Divider } from "antd";
import { fmtCents } from "./formatters/money.js";


// TODO: finish this
// Right now it is identical to Calculations component
function Calculations2(props) {

  const oas = props.oasCalculator(props.variables.yearsInCanada, props.constants.maxOas);
  const gis = props.gisCalculator(props.variables.annualIncome/2, oas, props.constants.standardIncome);

  const oasSpouse = props.oasCalculator(props.variables.yearsSpouseInCanada, props.constants.maxOas);
  const gisSpouse = props.gisCalculator(props.variables.annualIncome/2, oasSpouse, props.constants.standardIncome);

  const receivableGisRow = (receivableOas, receivableGis) => {
    if(receivableGis > 0) {
      return(
        <Row>
          <Col span={8}>Receivable GIS</Col>
          <Col span={8}>{fmtCents(props.constants.standardIncome)} - {fmtCents(receivableOas)} - {fmtCents(props.variables.annualIncome)} * 1yr/12mo/2/2</Col>
          <Col span={1}>=</Col>
          <Col span={7}>{fmtCents(receivableGis)} /mo</Col>
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
      <h2>You</h2>
      <Row>
        <Col span={8}>Receivable OAS</Col>
        <Col span={8}>{props.variables.yearsInCanada}/40 * {fmtCents(props.constants.maxOas)}</Col>
        <Col span={1}>=</Col>
        <Col span={7}>{fmtCents(oas)} /mo</Col>
      </Row>
      {receivableGisRow(oas, gis)}
      <Row>
        <Col span={8}></Col>
        <Col span={8} className="textAlignRight bold">Total</Col>
        <Col span={1}></Col>
        <Col span={7} className="bold">{fmtCents(oas + gis)} /mo</Col>
      </Row>

      <h2>Your spouse</h2>
      <Row>
        <Col span={8}>Receivable OAS</Col>
        <Col span={8}>{props.variables.yearsSpouseInCanada}/40 * {fmtCents(props.constants.maxOas)}</Col>
        <Col span={1}>=</Col>
        <Col span={7}>{fmtCents(oasSpouse)} /mo</Col>
      </Row>
      {receivableGisRow(oasSpouse, gisSpouse)}
      <Row>
        <Col span={8}></Col>
        <Col span={8} className="textAlignRight bold">Total</Col>
        <Col span={1}></Col>
        <Col span={7} className="bold">{fmtCents(oasSpouse + gisSpouse)} /mo</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={8} offset={8} className="textAlignRight bold">Total for Household</Col>
        <Col span={1}></Col>
        <Col span={7} className="bold">{fmtCents(oas + gis + oasSpouse + gisSpouse)}</Col>
        </Row>
    </Card>
  );
}

export default Calculations2;
