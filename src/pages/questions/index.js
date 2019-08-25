import React from 'react';
import {Link} from 'react-router-dom';
import {MdPhonelink} from 'react-icons/md';

import HeaderSite from '../../components/header-site';

import './styles.css';

export default function questions() {
  return (
    <>
    <HeaderSite/>
      <article className="questions">
        <div className="container questions-inner">
          <h1>Que tipo de aplicativo você está construindo?</h1>
          <p>O Apple iOS é a melhor opção para alcançar uma base de usuários mais envolvida. O Android tem um alcance mais amplo, no entanto, particularmente em mercados emergentes, como a Ásia e a África.</p>
          <div className="options">
            <Link to="/questions">
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50"/>
              </div>
              <span>teste</span>
            </Link>
            <Link to="/questions">
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50"/>
              </div>
              <span>teste</span>
            </Link>
            <Link to="/questions">
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50"/>
              </div>
              <span>teste</span>
            </Link>            
            <Link to="/questions">
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50"/>
              </div>
              <span>teste</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
