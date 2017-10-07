import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Timer from './Timer'
import NBL from './NBL/NBL'
import MomLog from './MomLog'
import Profile from './Profile/Profile'
import Home from './Home'
import Nav from './Nav'

export default class Layout extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/finalProject/timer" component={Timer}/>
          <Route path="/finalProject/nbl" component={NBL}/>
          <Route path="/finalProject/momlog" component={MomLog}/>
          <Route path="/finalProject/profile" component={Profile}/>
          <Route path="/finalProject/" component={Home}/>
        </Switch>
        <Nav/>
      </div>
    );
  }
}
