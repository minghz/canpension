import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from "antd";
import { fmtCents } from "./formatters/money.js";


function Constants(props) {
  return(
    <Card title="Constants">
      <Row>
        <Col span={16}>Maximum OAS (2020)</Col>
        <Col span={8} className="bold">{fmtCents(props.data.maxOas)} /mo</Col>
      </Row>
      <Row>
        <Col span={16}>Maximum GIS (2020)</Col>
        <Col span={8} className="bold">{fmtCents(props.data.maxGis)} /mo</Col>
      </Row>
    </Card>
  );
}

export default Constants;
