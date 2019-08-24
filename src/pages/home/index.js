import React, { Component } from 'react';
import HeaderSite from '../../components/header-site';

import './styles.css';

export default class home extends Component {
  render() {
    return(
      <>
      <HeaderSite/>
      <header className="showcase">
        <div className="container showcase-inner">
          <h1>QUANTO FAZER UM APLICATIVO</h1>
          <p>Você já se perguntou quanto custaria desenvolver um aplicativo para iOS ou Android? Essa útil calculadora de custos de aplicativos ajudará você a: Saiba quanto seu aplicativo custará em menos de um minuto!</p>
          <a href="#" className="btn">Comece agora</a>
        </div>
      </header>
      </>
    );
  }
}
