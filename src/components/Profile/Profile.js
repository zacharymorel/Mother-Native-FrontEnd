import React, { Component } from 'react';

export default class Profile extends Component {
  state = {
    babyID:"",
    babies:[
      {id:1,name:"Chen"},
      {id:2,name:"LiLi"},
      {id:3,name:"ETC"}
    ]
  }

  componentDidMount() {
    let url = 'server/'
    fetch(url)
    .then(res=>res.json)
  }

  render() {
    let babylist = this.state.babies.map(baby =>{
      return(
        <li key={baby.id} className="baby">
          <p>{baby.name}</p>
          <button>Settings</button>
        </li>
      )
    })
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="momprof">
          <h2>Mom's Info</h2>
          <p>Name: (Name)</p>
          <p>Username: (username)</p>
          <p>Change Password</p>
        </div>
        <div className="babyprofs">
          <h2>Babies!</h2>
          <ul className="babyList">
            {babylist}
          </ul>
        </div>
      </div>
    );
  }
}
