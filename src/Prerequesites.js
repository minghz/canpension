import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Checkbox } from "antd";


const options = [
  "I am 65 years of age or older",
  "I am a Canadian Citizen / have PR / landed immigrant",
  "I have lived in Canada for at least 10 years since the age of 18"
];

class Prerequesites extends Component {

  onChange = (selectedOpts) => {
    if(selectedOpts.length === 3) {
      this.props.onQualify(true);
    } else {
      this.props.onQualify(false);
    }
  }

  render() {

    return(
      <Card title="Prerequesites to OAS/GIS qualification">
        <Checkbox.Group
          options={options}
          defaultValue={[]}
          onChange={this.onChange}
        />
      </Card>
    );
  }
}

export default Prerequesites;
