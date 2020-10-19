import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from "antd";


function References(props) {
  return(
    <Card title="References">
      <Row>
        <Col span={24}><a href="./">[1] Reference</a></Col>
      </Row>
      <Row>
        <Col span={24}><a href="./">[2] Reference</a></Col>
      </Row>
      <Row>
        <Col span={24}><a href="./">[3] Reference</a></Col>
      </Row>
    </Card>
  );
}

export default References;
