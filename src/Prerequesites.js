import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Alert, Card, Checkbox } from "antd";


const options = [
  "I am 65 years of age or older",
  "I am a Canadian Citizen / have PR / landed immigrant",
  "I have lived in Canada for at least 10 years since the age of 18"
];

class Prerequesites extends Component {
  constructor(props) {
    super(props)

    this.state = { isQualified: false }
  }

  onChange = (selectedOpts) => {
    if(selectedOpts.length === 3) {
      this.setState({ isQualified: true })
    } else {
      this.setState({ isQualified: false })
    }
  }

  render() {

    const alert = <Alert
      type="warning"
      description="Warning: you must meet below pre-requesites to qualify"
    />

    return(
      <Card title="Prerequesites to OAS/GIS qualification">
        { this.state.isQualified ? null : alert }
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
