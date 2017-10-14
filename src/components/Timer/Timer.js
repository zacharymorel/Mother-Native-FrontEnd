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

  _avgFreq = () => {
    let sum = 0
    let dif = 0
    if (this.state.contractions) {
      this.state.contractions.map((contraction,i) => {
        if ((i-1)<this.state.contractions.length) {
          let a = moment(contraction.clocktimerstampstop)
          let b = moment((this.state.contractions[i+1]).clocktimerstampstop)
          dif = b.diff(a, 'minutes')
        }
        return (sum += dif)
      })
      return (sum/this.state.contractions.length)
    } else {
      return ''
    }
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
    let frequency = () => {
      let a = this.state.contractions[0]
      a = moment(a.clocktimerstampstop)
      let b = this.state.contractions[1]
      b = moment(b.clocktimerstampstop)
      let dif = b.diff(a,'minutes')
      console.log(dif)
      return dif
    }
    return (
      <div className="timer">
        <Counter/>
        <p className="averages">{frequency}  |  Avg Duration</p>
        <ul className="laps">
          {contractionlis}
        </ul>
        <p className="dropContractionLog" onClick={this._dropContractionLogs}>Clear Contraction Log</p>
      </div>
    );
  }
}
