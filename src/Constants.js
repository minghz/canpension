import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider } from "antd";
import { fmtCents } from "./formatters/money.js";


function Constants(props) {
  return(
    <Card title="Constants">
      <Row>
        <Col span={16}>Maximum OAS</Col>
        <Col span={8} className="bold">{fmtCents(props.data.maxOas)} /mo</Col>
      </Row>
      <Row>
        <Col span={16}> OAS Return Threshold</Col>
        <Col span={8} className="bold">{fmtCents(props.data.oasReturnThreshold)} /mo</Col>
      </Row>
      <Row>
        <Col span={16}>Default GIS (when receiving full OAS)</Col>
        <Col span={8} className="bold">{fmtCents(props.data.defaultGis)} /mo</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={16}>Standard income level (Maximum OAS + Default GIS)</Col>
        <Col span={8} className="bold">{fmtCents(props.data.standardIncome)} /mo</Col>
      </Row>
    </Card>
  );
}

export default Constants;
