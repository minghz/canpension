import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from "antd";

import {
  SINGLE_TABLE_URL,
  COUPLE_OAS_TABLE_URL,
  COUPLE_SOLITARY_OAS_TABLE_URL,
  OAS_QUALIFICATION_URL,
  OAS_RETURN_URL
} from "./constants/urls"

function References(props) {
  return(
    <Card title="References">
      <Row>
        <Col span={24}>
          <a href={SINGLE_TABLE_URL} target="_blank" rel="noopener noreferrer">
            [1] Tables - GIS for single person
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <a href={COUPLE_OAS_TABLE_URL} target="_blank" rel="noopener noreferrer">
            [2] Tables - GIS for couple qualifying for OAS
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <a href={COUPLE_SOLITARY_OAS_TABLE_URL} target="_blank" rel="noopener noreferrer">
            [3] Tables - GIS for couple with single OAS receiver
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <a href={OAS_QUALIFICATION_URL} target="_blank" rel="noopener noreferrer">
            [4] OAS Qualification requirements
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <a href={OAS_RETURN_URL} target="_blank" rel="noopener noreferrer">
            [5] OAS Returns for high world income earners
          </a>
        </Col>
      </Row>
    </Card>
  );
}

export default References;
