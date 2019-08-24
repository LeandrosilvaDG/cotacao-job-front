import React, { Component } from 'react';

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
                        <li><a href="#">Quanto custa para fazer um aplicativo?</a></li>
                        <li><a href="#">Quanto custa um website?</a></li>
                        <li><a href="#">App vs Site?</a></li>
                        <li><a href="#">Quanto custa um logotipo?</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
  }
}
