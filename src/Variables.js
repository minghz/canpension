import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, InputNumber } from "antd";


function onYearsChange(years) {
  console.log("onYearsChange", years);
}

function onProfitChange(profit) {
  console.log("onProfitChange", profit);
}

function Variables(props) {
  return(
    <Card title="Variables">
      <Row>
        <Col span={16}>Years lived in Canada</Col>
        <Col span={8}>
          <InputNumber
            size="large"
            defaultValue={40}
            min={0}
            max={40}
            onChange={onYearsChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={16}>Annual Profit (excluding OAS)</Col>
        <Col span={8}>
          <InputNumber
            size="large"
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onProfitChange}
          />
        </Col>
      </Row>
    </Card>
  );
}

export default Variables;
