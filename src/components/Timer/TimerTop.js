import React, { Component } from 'react';

export default class TimerTop extends Component {
  state = {
    counting: false,
    counter: 0,
    countDisplay: '0:0'
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

_onClick = (e) => {
  if (!this.state.counting) {
    this.startCounting()
  }
  if (this.state.counting) {
    this.stopCounting()
    // retrieve timestamp
    // fetch post
  }
}

  render() {
    let onClick = this._onClick
    return (
      <div className="timerTop">
        <p className="counter">{this.state.countDisplay}</p>
        <button className="startStop" onClick={onClick}>Start/Stop</button> {/*post method*/}
        <p className="averages">Avg Duration  |  Avg Frequency</p>
      </div>
    )
  }
}
