import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MdPhonelink } from 'react-icons/md'

import HeaderSite from '../../components/header-site'

import './styles.css'

class Questions extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  handleOptionCLick = (e) => {
    console.log(e)
  }

  render () {
    return (
    <>
      <HeaderSite />
      <article className="questions">
        <div className="container questions-inner">
          <h1>Que tipo de aplicativo você está construindo?</h1>
          <p>
            O Apple iOS é a melhor opção para alcançar uma base de usuários
            mais envolvida. O Android tem um alcance mais amplo, no entanto,
            particularmente em mercados emergentes, como a Ásia e a África.

          </p>
          <div className="options">
            <button to="/questions" params={{ teste: 'leandro' }} onClick={this.handleOptionCLick}>
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50" />
              </div>
              <span>teste</span>
            </button>
            <button to="/questions" params={{ teste: 'leandro' }} onClick={this.handleOptionCLick}>
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50" />
              </div>
              <span>teste</span>
            </button>
            <button to="/questions" params={{ teste: 'leandro' }} onClick={this.handleOptionCLick}>
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50" />
              </div>
              <span>teste</span>
            </button>
            <button to="/questions" params={{ teste: 'leandro' }} onClick={this.handleOptionCLick}>
              <div className="options-inner">
                <MdPhonelink color="#fff" size="50" />
              </div>
              <span>teste</span>
            </button>
          </div>
        </div>
      </article>
    </>
    )
  }
}

export default Questions
