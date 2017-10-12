import React, { Component } from 'react';
import axios from 'axios'
import {getAccessToken} from '../../utils/AuthService'

import TimerTop from './TimerTop'

export default class Timer extends Component {
  state = {
    contractions: []
  }

  componentDidMount() {
    let url = 'https://the-best-mom-app.herokuapp.com/api/mom/contraction'
    axios.get(url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=> {
    console.log(res)
    this.setState({contractions: [{duration:'long',clocktimerstampstop:'now'},{duration:'long',clocktimerstampstop:'now'}]})
    })
  }

  render() {
    let contractionlis = this.state.contractions.map(contraction => {
      return(
        <li className="contraction">
          <span>Contraction:</span>
          <span className="timestamp">{contraction.clocktimerstampstop}</span>
          <span className="duration">{contraction.duration}</span>
        </li>
      )
    })
    return (
      <div className="timer">
        <TimerTop/>
        <ul className="laps">
          {contractionlis}
        </ul>
      </div>
    );
  }
}
