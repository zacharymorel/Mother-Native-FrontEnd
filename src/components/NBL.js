import React, { Component } from 'react';

export default class NBL extends Component {
  state = {
    ifFeed: false,
    ifSleep: false,
    ifDiaper: false,
    ifNotes: false
  }

  _feedClick = ()=> {

  }

  render() {
    return (
      <div className="nbl">
        <button className="nblButton">Feeding</button>
        <button className="nblButton">Sleep</button>
        <button className="nblButton">Diaper</button>
        <button className="nblButton">Notes</button>
      </div>
    );
  }
}
