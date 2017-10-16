import React, { Component } from 'react';
import {login} from '../utils/AuthService'

export default class Login extends Component {
  render() {
    return (
      <div className="log">
        <h1>Welcome to</h1>
        <h1 className="mothernative">Mother Native</h1>
        <button className="loginbtn" onClick={()=>login()}>LOG IN</button>
      </div>
    );
  }
}
