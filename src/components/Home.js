import React, { Component } from 'react';
import weekbyweek from '../data/weekbyweek'

export default class Home extends Component {
  state = {
    week: 6
  }

  render() {
    let index = this.state.week - 6
    let weekref = weekbyweek[index]
    let facts = weekref.facts.map((fact,i)=>{
      return(
        <span key={i} className="fact">{fact}</span>
      )
    })
    let cssClass = `home ${weekref.class}`

    return (
      <div className={cssClass}>
        <div className="facts">
          {facts}
        </div>
      </div>
    );
  }
}
