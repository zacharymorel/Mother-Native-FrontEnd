import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">
        <span className="navwords">Home</span>
        </Link>
        <Link to="/timer">
        <span className="navwords">Contraction</span>
        <span className="navwords">Timer</span>
        </Link>
        <Link to="/nbl">
        <span className="navwords">Newborn</span>
        <span className="navwords">Log</span>
        </Link>
        <Link to="/momlog">
        <span className="navwords">Momma's</span>
        <span className="navwords">Log</span>
        </Link>
        <Link to="/profile">
        <span className="navwords">Profile</span>
        </Link>
      </div>
    );
  }
}
