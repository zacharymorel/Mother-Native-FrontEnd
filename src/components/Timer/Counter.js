import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import {getAccessToken} from '../../utils/AuthService'

export default class Counter extends Component {
  state = {
    counter: 0,
    countDisplay: '0:0',
    counting: false,
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

  _onClick = () => {
    if (!this.state.counting) {
      this.startCounting()
    }
    if (this.state.counting) {
      this.stopCounting()
      this.stampandsend()
      this.props.click
      this.setState({counter:0})
      this.setState({countDisplay:'0:0'})
    }
  }

  stampandsend = () => {
    axios({
      method: 'post',
      url: 'https://the-best-mom-app.herokuapp.com/api/mom/contraction',
      headers: { Authorization: `Bearer ${getAccessToken()}`},
      data: {
        duration: this.state.counter,
        clocktimerstampstop: `${moment().format('YYYY-MM-DD HH:mm:ss')}`
      }
    })
    .then(res=>console.log(res))
  }

  render() {
    let click = this._onClick
    return (
      <div className="timerTop">
        <p className="counter">{this.state.counter}</p>
        <button className="startStop" id={(this.state.counting)?'active':''} onClick={click}>{(!this.state.counting)?'Start':'Stop'}</button>
      </div>
    )
  }
}
