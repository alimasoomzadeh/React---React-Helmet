import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import ChildComponent from './ChildComponent';

class Parent extends Component {
  render() {
    return (
        <div>
          <Helmet>
            <title>parent title</title>
            <meta name="description" content="parentComponent" />
            <meta name="theme-color" content="#008f68" />
              <body className="dark"/>
          </Helmet>
          <ChildComponent />
        </div>
    );
  }
}

export default Parent;