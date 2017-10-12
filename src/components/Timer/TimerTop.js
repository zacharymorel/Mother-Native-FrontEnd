import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'
import {getAccessToken} from '../../utils/AuthService'

export default class TimerTop extends Component {
  state = {
    counting: false,
    counter: 0,
    countDisplay: '0:0',
  }

  count = () => {
      this.setState(current => {return ({counter: current.counter+=1})})
      this.setState(current => {
        let seconds = current.counter%60
        let minutes = ((current.counter - seconds) / 60)
        return ({countDisplay: `${minutes}:${seconds}`})
      })
    }

  startCounting = () => {
    console.log('Start!');
    this.setState({counting: true})
    this.timer = setInterval(this.count, 1000)
  }

  stopCounting = () => {
    console.log('Stop!');
    this.setState({counting: false})
    clearInterval(this.timer)
  }

  stampandsend = () => {
    let now = moment()._d
    let url = 'https://the-best-mom-app.herokuapp.com/api/mom/contraction'
    console.log(now)
    console.log(this.state.counter)
    axios({
      method: 'post',
      url: 'https://the-best-mom-app.herokuapp.com/api/mom/contraction',
      headers: { Authorization: `Bearer ${getAccessToken()}`},
      data: {
        duration: this.state.counter,
        clocktimerstampstop: `${moment().format('YYYY-MM-DD HH:mm:ss')}`
      }
    })
  }


  _onClick = (e) => {
    if (!this.state.counting) {
      this.startCounting()
    }
    if (this.state.counting) {
      this.stopCounting()
      this.stampandsend()
    }
  }

  render() {
    let onClick = this._onClick
    return (
      <div className="timerTop">
        <p className="counter">{this.state.countDisplay}</p>
        <button className="startStop" onClick={onClick}>{(!this.state.counting)?'Start':'Stop'}</button>
        <p className="averages">Avg Duration  |  Avg Frequency</p>
      </div>
    )
  }
}
