import React, { Component } from 'react';

export default class DiaperForm extends Component {
  render() {
    let submitform = () => {
      if (this.props.expand) {
        return(
          <div className="form">
            <form className="diaperform" action="submit">
              <button className="submit" type="submit">Log Pee</button>
            </form>
            <span className="or">or</span>
            <form className="diaperform" action="submit">
              <button className="submit" type="submit">Log Poop</button>
            </form>
          </div>
        )
      } else {
        return (
          <h3>Diaper</h3>
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
