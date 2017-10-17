import React, {Component} from 'react'

export default class BabyList extends Component {
  render() {
    let babylist = (this.props.babies.map(baby =>{
      return(
        <li key={baby.id} className="baby">
          <p>{baby.name}</p>
          <button className="profilebutton">Settings</button>
        </li>
      )
    }))
    return(
      <div className="babyprofs">
       <h2>Babies!</h2>
       <ul className="babyList">
         {babylist}
       </ul>
       <button className="babybutton" onClick={this.props.addBaby}>Add a Baby</button>
     </div>
    )
  }
}
