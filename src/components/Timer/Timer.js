import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import {getAccessToken} from '../../utils/AuthService'
import {averageFrequency} from './Fn'

import Counter from './Counter'

export default class Timer extends Component {
  state = {
    contractions: [],
    url: 'https://the-best-mom-app.herokuapp.com/api/mom/contraction',
    frequency: '',
    duration: ''
  }

  _avgFreq = () => {
    let answer = () => {
      if (this.state.contractions) {
        return (averageFrequency(this.state.contractions, ))
      } else {
        return ''
      }
    }
    this.setState({frequency: answer})
  }

  _avgDur = () => {
    let array = this.state.contractions
    let sum = 0
    let avg = 0
    if (array) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].duration
      }
      let avg = (sum/array.length).toString()
      avg = avg.slice(0, (avg[(avg.indexOf('.'))+1]))
      this.setState({duration: avg})
    } else {
      return ''
    }
  }

  _dropContractionLogs = () => {
    axios.delete(this.state.url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=>console.log(res))
    .then(res => {this._updateStats()})
  }

  _updateStats = () => {
    axios.get(this.state.url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=> {
      this.setState({contractions: res.data})
    })
    .then(data => {
      this._avgDur()
      this._avgFreq()
    })
  }

  componentDidMount() {
    this._updateStats()
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
          <span className="timestamp">Contraction: {dt}</span>
          <span className="duration">Duration: {dur()}</span>
        </li>
      )
    })
    return (
      <div className="timer">
        <Counter click={this._updateStats}/>
        <p className="averages">Frequency: {this.state.frequency}  |  Duration: {this.state.duration}</p>
        <ul className="laps">
          {contractionlis}
        </ul>
        <p className="dropContractionLog" onClick={this._dropContractionLogs}>Clear Contraction Log</p>
      </div>
    );
  }
}
