import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('/sessions', {
      email: this.state.email,
      password: this.state.password
    });
    localStorage.setItem('token', response.data.token);
    this.props.history.push('/admin');
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }
  
  render() {
    return (
      <div id="container">
        <form onSubmit={this.handleSubmit} id="login">
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder="Usuário"
            />
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
