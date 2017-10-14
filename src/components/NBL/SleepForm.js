import React, { Component } from 'react';

export default class SleepForm extends Component {
  render() {
    let submitform = () => {
      if (this.props.expand) {
        return(
          <div className="form">
            <form action="submit">
              <select className="breast">
                <option value="0">less than 5</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
              <button className="submittwo" type="submit">Log Sleep</button>
            </form>
          </div>
        )
      } else {
        return (
          <h3>Sleep</h3>
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
