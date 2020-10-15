import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Row, Col } from "antd";
import Variables from "./Variables";


function App() {
  return (
    <Row>
      <Col span={6}>
        <Variables />
      </Col>
    </Row>
  );
}

export default App;
