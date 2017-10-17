import React, {Component} from 'react'

export default class NewBaby extends Component {

  render() {
    return(
      <div className="newBaby">
        <form action="submit" className="createBaby">
          <label className="newBabyLabel" htmlFor="name">Do they have a name?</label>
          <input className="newBabyInput" name="name" value={this.props.name} onChange={this.props.change} type="text"/>
          <label className="newBabyLabel" htmlFor="duedate">Baby's Due Date:</label>
          <input className="newBabyInput" name="duedate" value={this.props.duedate} onChange={this.props.change} type="date"/>
          <label className="newBabyLabel" htmlFor="gender">Boy or Girl?</label>
          <select value={this.props.gender} onChange={this.props.change} name="gender">
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
            <option value="unknown">Unknown</option>
          </select>
          <label className="newBabyLabel" htmlFor="birthdate">Do you know the Birthday?</label>
          <input className="newBabyInput" name="birthdate" value={this.props.borthdate} onChange={this.props.change} type="date"/>
          <button className="createBabyButton" type="submit" onClick={this.props._createBaby}>Create Baby!</button>
        </form>
      </div>
    )
  }
}
