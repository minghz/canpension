import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Row, Col, Collapse } from "antd";
import Prerequesites from "./Prerequesites";
import References from "./References";

import SingleSituation from "./SingleSituation";
import CoupleSituation from "./CoupleSituation";


const { Panel } = Collapse;

class App extends Component {

  render() {

      return (
        <div className="mainContainer">
          <h1>Old Age Security (OAS) &<br />Guaranteed Income Supplement (GIS) calculator</h1>
          <p>The goal of this website is to bring transparency and simplicity into obtaining the OAS and GIS amounts for Canadian Pensioners.</p>
          <p>This website is not sponsored by the Canadian government. The calculations here serve as reference only, with data taken from the Government of Canada websites. Reference links can be found on this site for further context.</p>

          <Row>
            <Col span={12}><Prerequesites /></Col>
          </Row>


          <Collapse accordion>
            <Panel header="If you are a single, widowed, or divorced pensioner" key="1">
              <SingleSituation />
            </Panel>
            <Panel header="If you have a spouse or common-law partner" key="2">
              <CoupleSituation />
            </Panel>
          </Collapse>

          <References />
          <p>If this site has helped you, consider buying the author a coffee here ___</p>
        </div>
      );
  }
}

export default App;
