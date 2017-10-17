import React, {Component} from 'react'

export default class NewBaby extends Component {

  render() {
    return(
      <div className="newBaby">
        <form action="submit" className="createBaby">
          <label htmlFor="name">Do they have a name?</label>
          <input name="name" value={this.props.name} onChange={this.props.change} type="text"/>
          <label htmlFor="duedate">Baby's Due Date:</label>
          <input name="duedate" value={this.props.duedate} onChange={this.props.change} type="date"/>
          <label htmlFor="gender">Boy or Girl?</label>
          <select value={this.props.gender} onChange={this.props.change} name="gender">
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
            <option value="unknown">Unknown</option>
          </select>
          <label htmlFor="birthdate">Do you know the Birthday?</label>
          <input name="birthdate" value={this.props.borthdate} onChange={this.props.change} type="date"/>
          <button type="submit" onClick={this.props._createBaby}>Create Baby!</button>
        </form>
      </div>
    )
  }
}
