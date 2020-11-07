import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from "antd";
import CoupleWithOas from "./CoupleWithOas";
import CoupleWithSolitaryOas from "./CoupleWithSolitaryOas";

const { TabPane } = Tabs;

class CoupleSituation extends Component {

  render() {
    return(
      <Tabs size="large" type="card">
        <TabPane tab="Spouse receive OAS" key="1">
          <CoupleWithOas />
        </TabPane>
        <TabPane tab="Spouse receives the Allowance" key="3"></TabPane>
        <TabPane tab="Spouse does not receive OAS or Allowance" key="2">
          {/* Note that partial-OAS scenario for this case is very iffy! */}
          <CoupleWithSolitaryOas />
        </TabPane>
      </Tabs>
    );
  }

}

export default CoupleSituation;
