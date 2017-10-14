import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import {getAccessToken} from '../../utils/AuthService'

import Counter from './Counter'

export default class Timer extends Component {
  state = {
    contractions: [],
    url: 'https://the-best-mom-app.herokuapp.com/api/mom/contraction'
  }

  _dropContractionLogs = () => {
    axios.delete(this.state.url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=>console.log(res))
  }

  componentDidMount() {
    axios.get(this.state.url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=> {
      this.setState({contractions: res.data})
    })
  }

  render() {
    let contractionlis = this.state.contractions.map((contraction,i) => {
      let dt = `${moment(contraction.clocktimerstampstop).format('MMM Do, h:mma')}`
      let dur = () => {
        let seconds = contraction.duration%60
        let minutes = ((contraction.duration - seconds) / 60)
        return (`${minutes} min. ${seconds}sec.`)
      }
      return(
        <li key={i} className="contraction">
          <span className="timestamp">Contration: {dt}</span>
          <span className="duration">Duration: {dur()}</span>
        </li>
      )
    })
    return (
      <div className="timer">
        <Counter/>
        <p className="dropContractionLog">Clear Contraction Log</p>
        <ul className="laps">
          {contractionlis}
        </ul>
      </div>
    );
  }
}
