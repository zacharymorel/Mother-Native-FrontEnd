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

  _feedClick = (e)=> {
    e.preventDefault()
    this.setState({feed:true})
    console.log("feed state changed!");
  }
  _sleepClick = (e)=> {
    e.preventDefault()
    this.setState({sleep:true})
  }
  _diaperClick = (e)=> {
    e.preventDefault()
    this.setState({diaper:true})
  }
  _notesClick = (e)=> {
    e.preventDefault()
    this.setState({notes:true})
  }

  render() {
    return (
      <div className="nbl">
        <div className="nblButton" onClick={this._feedClick}>
          <FeedForm expand={this.state.feed}/>
        </div>
        <div className="nblButton" onClick={this._sleepClick}>
          <SleepForm expand={this.state.sleep}/>
        </div>
        <div className="nblButton" onClick={this._diaperClick}>
          <DiaperForm expand={this.state.diaper}/>
        </div>
        <div className="nblButton" onClick={this._notesClick}>
          <NotesForm expand={this.state.notes}/>
        </div>
      </div>
    );
  }
}
