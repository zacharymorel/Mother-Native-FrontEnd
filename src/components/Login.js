import React, { Component } from 'react';
import {login} from '../utils/AuthService'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>You are not logged in!</h1>
        <button className="loginbtn" onClick={()=>login()}>LOG IN</button>
      </div>
    );
  }
}
