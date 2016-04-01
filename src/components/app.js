import React from 'react';
import { Component } from 'react';

import Header from './header.js';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        {this.props.children}
      </div>

    );
  }
}
