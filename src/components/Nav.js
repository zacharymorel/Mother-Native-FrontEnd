import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/timer">Contraction<br/>Timer</Link>
        <Link to="/nbl">Newborn<br/>Log</Link>
        <Link to="/momlog">Mom's<br/>Log</Link>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}
