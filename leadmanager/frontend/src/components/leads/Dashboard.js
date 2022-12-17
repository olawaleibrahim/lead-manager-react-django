import React, { Component, Fragment } from 'react'
import Form from './Form';
import Leads from './Leads';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Leads />
      </Fragment>
    )
  }
}

export default Dashboard;
