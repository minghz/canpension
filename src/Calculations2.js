import React from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Card, Row, Col, Divider } from "antd";
import { fmtCents } from "./formatters/money.js";

import { COUPLE_OAS_TABLE_URL } from "./constants/urls"

function Calculations2(props) {

  const oas = props.oasCalculator(props.variables.yearsInCanada, props.constants.maxOas);
  const gis = props.gisLookup(props.variables.annualIncome, oas, props.constants.standardIncome);

  const oasSpouse = props.oasCalculator(props.variables.yearsSpouseInCanada, props.constants.maxOas);
  const gisSpouse = props.gisLookup(props.variables.annualIncome, oasSpouse, props.constants.standardIncome);

  return(
    <Card title="Calculations">
      <h2>You</h2>
      <Row>
        <Col span={8}>Receivable OAS</Col>
        <Col span={8}>{props.variables.yearsInCanada}/40 * {fmtCents(props.constants.maxOas)}</Col>
        <Col span={1}>=</Col>
        <Col span={7}>{fmtCents(oas)} /mo</Col>
      </Row>
      <Row>
          <Col span={8}>Receivable GIS</Col>
          <Col span={8}><a href={COUPLE_OAS_TABLE_URL} target="_blank">From lookup tables [2]</a></Col>
          <Col span={1}>=</Col>
          <Col span={7}>{fmtCents(gis)} /mo</Col>
      </Row>
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
      <Row>
          <Col span={8}>Receivable GIS</Col>
          <Col span={8}><a href={COUPLE_OAS_TABLE_URL} target="_blank">From lookup tables [2]</a></Col>
          <Col span={1}>=</Col>
          <Col span={7}>{fmtCents(gisSpouse)} /mo</Col>
      </Row>
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
