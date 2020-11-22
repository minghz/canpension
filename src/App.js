import ReactGA from 'react-ga';

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/App.css';
import { Row, Col, Collapse } from "antd";
import { TwitterOutlined, GithubOutlined } from "@ant-design/icons"

import Prerequesites from "./Prerequesites";
import References from "./References";
import SingleSituation from "./SingleSituation";
import CoupleSituation from "./CoupleSituation";

const trackingId = "G-8MCQ9VK0VW";

const { Panel } = Collapse;

class App extends Component {

  render() {

    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <div className="mainContainer">
        <h1>Old Age Security (OAS) &<br />Guaranteed Income Supplement (GIS) calculator</h1>

        <p>The goal of this website is to bring transparency and simplicity into obtaining the OAS and GIS amounts for Canadian Pensioners.</p>
        <p>Partial OAS receipients may find slight discrepancies over the total receivable GIS.</p>

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

        <p></p>
        <p>This website is not sponsored by the Canadian government. The calculations here serve as reference only, with data taken from the official Government of Canada websites. Reference links can be found on this site for further context.</p>
        <p>Found a mistake? Have a suggestion? Tweet at the author <a href="https://twitter.com/minghz42" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a></p>
        <p>Want to help improve the site? Suggest a fix <a href="https://github.com/minghz/canpension" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a></p>
        <p>If you really liked this calculator, consider a small donation.</p>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="ZZWHWFPWB8RAU" />
          <input type="hidden" name="item_name" value="OAS/GIS Calculator Site Funding" />
          <input type="hidden" name="currency_code" value="CAD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <p>Last updated: Nov 2020</p>
      </div>
    );
  }
}

export default App;
