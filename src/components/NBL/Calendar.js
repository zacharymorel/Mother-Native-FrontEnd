import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../../data/events';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment)

function Event({ event }) {
  return (
    <span>
      <strong>
      {event.title}
      </strong>
      { event.desc && (':  ' + event.desc)}
    </span>
  )
}

function EventAgenda({ event }) {
  return <span>
    <em style={{ color: 'magenta'}}>{event.title}</em>
    <p>{ event.desc }</p>
  </span>
}


export default class Basic extends Component {
  render(){
    return (
      <div className="calendar" {...this.props}>
        <BigCalendar
          views={['month']}
          events={events}
          defaultDate={new Date(2017, 9, 1)}
          defaultView='month'
          components={{
            event: Event,
            agenda: {
              event: EventAgenda
            }
          }}
        />
      </div>
    )
  }
}
