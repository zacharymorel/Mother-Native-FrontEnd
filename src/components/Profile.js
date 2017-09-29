import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="momprof">
          <h2>Mom's Info</h2>
          <p>Name: (Name)</p>
          <p>Username: (username)</p>
          <p>Change Password</p>
        </div>
        <div className="babyprof">
          <h2>Baby Info</h2>
          <p>Baby #1</p>
          <Link to="/babysettings">Settings</Link>
          <p>Baby #2</p>
          <Link to="/babysettings">Settings</Link>
          <p>Baby #3</p>
          <Link to="/babysettings">Settings</Link>
        </div>
      </div>
    );
  }
}
