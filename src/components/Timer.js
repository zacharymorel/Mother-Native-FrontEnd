import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <div className="timerTop">
          <p className="counter">##:##</p>
          <button className="startStop">Start/Stop</button>
          <p className="averages">Avg Duration  |  Avg Frequency</p>
        </div>
        <ul className="laps">
          <li className="contraction">
            <span>Contraction:</span>
            <span className="timestamp">##:##</span>
            <span className="duration">(#:##)</span>
          </li>
          <li className="contraction">
            <span>Contraction:</span>
            <span className="timestamp">##:##</span>
            <span className="duration">(#:##)</span>
          </li>
          <li className="contraction">
            <span>Contraction:</span>
            <span className="timestamp">##:##</span>
            <span className="duration">(#:##)</span>
          </li>
          <li className="contraction">
            <span>Contraction:</span>
            <span className="timestamp">##:##</span>
            <span className="duration">(#:##)</span>
          </li>
          <li className="contraction">
            <span>Contraction:</span>
            <span className="timestamp">##:##</span>
            <span className="duration">(#:##)</span>
          </li>
          <li className="contraction">
            <span>Contraction:</span>
            <span className="timestamp">##:##</span>
            <span className="duration">(#:##)</span>
          </li>
          <li className="contraction">
            <span>Contraction:</span>
            <span className="timestamp">##:##</span>
            <span className="duration">(#:##)</span>
          </li>
        </ul>
      </div>
    );
  }
}
