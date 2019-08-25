import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default class headerSite extends Component {
  render() {
    return(
        <>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler"/>
                <div class="hamburger"><div></div></div>
                <div className="menu">
                <div>
                    <div>
                    <ul>
                        <li><Link to="/questions">Quanto custa para fazer um aplicativo?</Link></li>
                        <li><Link to="/questions">Quanto custa um website?</Link></li>
                        <li><Link to="/questions">App vs Site?</Link></li>
                        <li><Link to="/questions">Quanto custa um logotipo?</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
  }
}
