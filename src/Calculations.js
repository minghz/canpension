import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, InputNumber } from "antd";


function Calculations(props) {
  return(
    <Card title="Calculations">
      <Row>
        <Col span={8}>Receivable OAS</Col>
        <Col span={8}>X/40 * 614.14</Col>
        <Col span={1}>=</Col>
        <Col span={7}>XXX</Col>
      </Row>
      <Row>
        <Col span={8}>Receivable GIS</Col>
        <Col span={8}>income * XX</Col>
        <Col span={1}>=</Col>
        <Col span={7}>XXX</Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={1}></Col>
        <Col span={7}><strong>XXX</strong></Col>
      </Row>
    </Card>
  );
}

export default Calculations;
