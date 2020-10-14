import React from 'react';
import './App.css';
import {Row, Col} from "antd";

function App() {
  return (
    <div>
      <Row>
        <Col>Years lived in Canada</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>Annual Profit (excluding OAS)</Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default App;
