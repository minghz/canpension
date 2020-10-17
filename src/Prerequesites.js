import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Checkbox } from "antd";


function Prerequesites(props) {
  return(
    <Card title="Prerequesites">
      <Row>
        <Col span={20}>I am 65 years of age or older</Col>
        <Col span={4}><Checkbox></Checkbox></Col>
      </Row>
      <Row>
        <Col span={20}>I am a Canadian Citizen / have PR / landed immigrant</Col>
        <Col span={4}><Checkbox></Checkbox></Col>
      </Row>
      <Row>
        <Col span={20}>I have lived in Canada for at least 10 years since the age of 18</Col>
        <Col span={4}><Checkbox></Checkbox></Col>
      </Row>
    </Card>
  );
}

export default Prerequesites;
