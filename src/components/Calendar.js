import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import events from '../data/events';

BigCalendar.momentLocalizer(moment)

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

export default class Basic extends Component{
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        step={60}
        defaultDate={new Date(2015, 3, 1)}
      />
    )
  }
}
