import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Row, Col, Collapse, Alert } from "antd";
import Prerequesites from "./Prerequesites";
import References from "./References";

import SingleSituation from "./SingleSituation";
import CoupleSituation from "./CoupleSituation";


const { Panel } = Collapse;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isQualified: false
    }
  }

  handleQualify = (isQualified) => {
    this.setState({isQualified: isQualified});
  }

  render() {

    const alert = <Alert
      type="warning"
      message="You may not qualify"
      description="Please note that you must meet above pre-requesites to qualify for OAS/GIS."
    />

      return (
        <div className="mainContainer">

          <h1>Old Age Security (OAS) &<br />Guaranteed Income Supplement (GIS) calculator</h1>
          <p>The goal of this website is to bring transparency and simplicity into obtaining the OAS and GIS amounts for Canadian Pensioners.</p>
          <p>This website is not sponsored by the Canadian government. The calculations here serves as reference only, with data taken from the Government of Canada websites. Reference links can be found on this site for further context.</p>

          <Row>
            <Col span={12}><Prerequesites onQualify={this.handleQualify}/></Col>
            <Col span={12}><References /></Col>
          </Row>

          { this.state.isQualified ? null : alert }

          <Collapse accordion>
            <Panel header="If you are a single, widowed, or divorced pensioner" key="1">
              <SingleSituation />
            </Panel>
            <Panel header="If you have a spouse or common-law partner" key="2">
              <CoupleSituation />
            </Panel>
          </Collapse>

        </div>
      );
  }
}

export default App;
