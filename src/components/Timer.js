import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <p className="counter">##:##</p>
        <button className="startStop">Start/Stop</button>
      </div>
    );
  }
}
