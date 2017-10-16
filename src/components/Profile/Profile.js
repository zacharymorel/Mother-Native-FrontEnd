import React, { Component } from 'react';

export default class Profile extends Component {
  state = {
    babyID:'',
    babies:[
      {id:1,name:"Chen"},
      {id:2,name:"LiLi"},
      {id:3,name:"ETC"}
    ],
    background:''
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
          <button className="profilebutton">Settings</button>
        </li>
      )
    })
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="momprof">
          <h2>Mom's Info</h2>
          <p>Hello, Mandy</p>
          <div className="image">
            <h3 className="profileupload">Image Upload</h3>
            <input type="file" name="file" id="file" class="wallpaper"/>
            <label className="imageupload" for="file">Choose a file</label>
          </div>
        </div>
        <div className="babyprofs">
          <h2>Babies!</h2>
          <ul className="babyList">
            {babylist}
          </ul>
        </div>
          <button className="babybutton">Add a Baby</button>
      </div>
    );
  }
}
