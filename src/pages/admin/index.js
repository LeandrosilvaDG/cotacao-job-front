import React, { Component } from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

import './styles.css';

export default class admin extends Component {
  render() {
    return (
      <>
        <Header/>
        <div id="content">
          <Sidebar/>
          <div id="dashboard">
            ok
          </div>
        </div>
      </>
    );
  }
}
