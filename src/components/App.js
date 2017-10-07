import React, { Component } from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService'
import '../styles/index.css';
import Layout from './Layout'

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* {(isLoggedIn())?<Layout/>:''} */}
        <Layout/>
      </div>
    );
  }
}
