import React, { Component } from 'react';

import TimerTop from './TimerTop'

export default class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <TimerTop/>
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
