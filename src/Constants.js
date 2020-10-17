import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, InputNumber } from "antd";


function Constants(props) {
  return(
    <Card title="Constants">
      <Row>
        <Col span={16}>Maximum OAS (2020)</Col>
        <Col span={8}><strong>$614.14</strong></Col>
      </Row>
      <Row>
        <Col span={16}>Maximum GIS (2020)</Col>
        <Col span={8}><strong>$917.29</strong></Col>
      </Row>
    </Card>
  );
}

export default Constants;
