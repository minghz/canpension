import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from "antd";

import { SINGLE_TABLE_URL } from "./constants/urls"

function References(props) {
  return(
    <Card title="References">
      <Row>
        <Col span={24}>
          <a href={SINGLE_TABLE_URL} target="_blank">
            [1] Tables - GIS for single person
          </a>
        </Col>
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
