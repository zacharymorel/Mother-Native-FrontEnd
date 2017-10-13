import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import {getAccessToken} from '../../utils/AuthService'

import TimerTop from './TimerTop'

export default class Timer extends Component {
  state = {
    contractions: []
  }

  _dropContractionLogs = () => {
    let url = 'https://the-best-mom-app.herokuapp.com/api/mom/contraction'
    axios.delete(url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=>console.log(res))
  }

  componentDidMount() {
    let url = 'https://the-best-mom-app.herokuapp.com/api/mom/contraction'
    axios.get(url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=> {
      this.setState({contractions: res.data})
    })
  }

  render() {
    let contractionlis = this.state.contractions.map(contraction => {
      let dt = `${moment(contraction.clocktimerstampstop).format('MMM Do, h:mma')}`
      console.log(dt);
      let dur = () => {
        let seconds = contraction.duration%60
        let minutes = ((contraction.duration - seconds) / 60)
        return (`${minutes} min. ${seconds}sec.`)
      }
      console.log(dur());
      return(
        <li className="contraction">
          <span className="timestamp">Contration: {dt}</span>
          <span className="duration">Duration: {dur()}</span>
        </li>
      )
    })
    return (
      <div className="timer">
        <TimerTop/>
        <ul className="laps">
          {contractionlis}
          <li className="dropbutton" onClick={this.dropContractionLogs}>
            <p>Clear Contraction Log</p>
          </li>
        </ul>
      </div>
    );
  }
}
