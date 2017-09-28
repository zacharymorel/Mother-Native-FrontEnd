import React, { Component } from 'react';
import FeedForm from './FeedForm'
import SleepForm from './SleepForm'
import DiaperForm from './DiaperForm'
import NotesForm from './NotesForm'

export default class NBL extends Component {
  state = {
    feed: false,
    sleep: false,
    diaper: false,
    notes: false,
  }

  _feedClick = ()=> {
    this.setState({feed:true})
    console.log("feed state changed!");
  }
  _sleepClick = ()=> {
    this.setState({sleep:true})
  }
  _diaperClick = ()=> {
    this.setState({diaper:true})
  }
  _notesClick = ()=> {
    this.setState({notes:true})
  }

  render() {
    return (
      <div className="nbl">
        <div className="nblButton" onClick={this._feedClick}>
          <FeedForm expand={this.state.feed}/>
        </div>
        <div className="nblButton" onClick={this._sleepClick}>
          <h3>Sleep</h3>
          <SleepForm expand={this.state.sleep}/>
        </div>
        <div className="nblButton" onClick={this._diaperClick}>
          <h3>Diaper</h3>
          <DiaperForm expand={this.state.diaper}/>
        </div>
        <div className="nblButton" onClick={this._notesClick}>
          <h3>Notes</h3>
          <NotesForm expand={this.state.notes}/>
        </div>
      </div>
    );
  }
}
