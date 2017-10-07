import React, { Component } from 'react';

export default class DiaperForm extends Component {
  render() {
    let submitform = () => {
      if (this.props.expand) {
        return(
          <div className="form">
            <form action="submit">
              <input type="text"/>
              <button className="submit" type="submit">Log Notes</button>
            </form>
          </div>
        )
      } else {
        return (
          <h3>Notes</h3>
        )
      }
    }
    return (
      <div className="submitform">
        {submitform()}
      </div>
    )
  }
}
