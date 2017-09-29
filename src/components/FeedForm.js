import React, { Component } from 'react';

export default class FeedForm extends Component {
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
              <button className="submit" type="submit">Log Breast Feeding</button>
            </form>
            <span className="or">or</span>
            <form action="submit">
              <select className="bottle">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <button className="submit" type="submit">Log Bottle Feeding</button>
            </form>
          </div>
        )
      } else {
        return (
          <h3>Feed</h3>
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
