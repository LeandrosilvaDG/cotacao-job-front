import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import HeaderSite from '../../components/header-site';

import './styles.css';

export default class home extends Component {
  render() {
    return(
      <>
      <HeaderSite/>
      <article className="showcase">
        <div className="container showcase-inner">
          <h1>QUANTO FAZER UM APLICATIVO</h1>
          <p>Você já se perguntou quanto custaria desenvolver um aplicativo para iOS ou Android? Essa útil calculadora de custos de aplicativos ajudará você a: Saiba quanto seu aplicativo custará em menos de um minuto!</p>
          <Link to="/questions" className="btn">Comece agora</Link>
        </div>
      </article>
      </>
    );
  }
}
