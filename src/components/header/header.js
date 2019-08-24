import React, { Component } from 'react';
import {FaUser} from 'react-icons/fa';

import './styles.css';

export default class header extends Component {
  render() {
    return (
      <header id="admin-header">
        <div className="admin-header-content">
          <h1>HowMuch</h1>
          <span><FaUser color="#6b179c" size="25"/></span>
        </div>
      </header>
    );
  }
}
