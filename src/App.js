import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Row, Col } from "antd";
import Prerequesites from "./Prerequesites";
import References from "./References";

import SingleSituation from "./SingleSituation";
import CoupleSituation from "./CoupleSituation";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Row>
          <Col span={12}><Prerequesites /></Col>
          <Col span={12}><References /></Col>
        </Row>

        <SingleSituation />
        <CoupleSituation />

      </div>
    );
  }
}

export default App;
