import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default class sidebar extends Component {
  render() {
    return(
        <sidebar id="sidebar-menu">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Oportunidades
                    </Link>
                </li>
                <li>    
                    <Link to="/">
                        Perguntas
                    </Link>
                </li>
                <li> 
                    <Link to="/">
                        User
                    </Link>
                </li>
            </ul>
        </sidebar>
    );
  }
}
