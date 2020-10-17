import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Row, Col } from "antd";
import Prerequesites from "./Prerequesites";
import References from "./References";
import Variables from "./Variables";
import Constants from "./Constants";
import Calculations from "./Calculations";


function App() {
  return (
    <>
      <Row>
        <Col span={8}><Prerequesites /></Col>
        <Col span={8}><References /></Col>
      </Row>
      <h1>If you are a single, widowed or divorced pensioner</h1>
      <Row>
        <Col span={6}>
          <Variables />
        </Col>
        <Col span={6}>
          <Constants />
        </Col>
        <Col span={6}>
          <Calculations />
        </Col>
      </Row>
      <Row>
      </Row>
    </>
  );
}

export default App;
