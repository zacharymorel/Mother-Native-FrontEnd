import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import {setAccessToken, setIdToken, getAccessToken} from '../utils/AuthService'

import Timer from './Timer'
import NBL from './NBL/NBL'
import MomLog from './MomLog'
import Profile from './Profile/Profile'
import Home from './Home'
import Nav from './Nav'

export default class Layout extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
  }

  render() {
    let homescreen = () => {
      if (isLoggedIn()) {
        return (
          <div className="main">
            <Switch>
              <Route path="/timer" component={Timer}/>
              <Route path="/nbl" component={NBL}/>
              <Route path="/momlog" component={MomLog}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/" component={Home}/>
            </Switch>
            <Nav/>
          </div>
        )
      } else {
        return (<Login/>)
      }
    }
    return (
      {homescreen()}
    );
  }
}
