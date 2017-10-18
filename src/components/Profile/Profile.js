import React, { Component } from 'react';
import axios from 'axios'
import BabyList from './BabyList'
import NewBaby from './NewBaby'
import {getAccessToken} from '../../utils/AuthService'

export default class Profile extends Component {
  state = {
    babyID:'',
    addBaby: false,
    babies:[],
    background:'',
    name: '',
    duedate: '',
    gender: '',
    birthdate: ''
  }

addBaby = () => {
  this.setState({addBaby: true})
}

_hasContent = (thing) => {
  return ((!!thing)? thing : null)
}

_inputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
}

_createBaby = (e) => {
  e.preventDefault()
  this.setState({addBaby: false})
  console.log(this.state.duedate);
  axios({
    method: 'post',
    url: 'https://the-best-mom-app.herokuapp.com/api/baby',
    headers: { Authorization: `Bearer ${getAccessToken()}`},
    data: {
      name: this._hasContent(this.state.name),
      duedate: this._hasContent(this.state.duedate),
      gender: this._hasContent(this.state.gender),
      birthdate: this._hasContent(this.state.birthdate)
    }
  })
  .then(res=>console.log(res))
  .then(res=>{this.setState({addBaby: false})})
}

  componentDidMount() {
    let url = 'https://the-best-mom-app.herokuapp.com/api/baby'
    axios.get(url, {headers: { Authorization: `Bearer ${getAccessToken()}`}})
    .then(res=>{this.setState({babies: res.data})})
  }

  render() {
    let createBaby = (this.state.addBaby)?<NewBaby change={this._inputChange} name={this.state.name} duedate={this.state.duedate} gender={this.state.gender} birthdate={this.state.birthdate} _createBaby={this._createBaby}/>:<BabyList babies={this.state.babies} addBaby={this.addBaby}/>
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="momprof">
          <h2>Mom's Info</h2>
          <p>Hello, Mandy</p>
          <div className="image">
            <h3 className="profileupload">Image Upload</h3>
            <input type="file" name="file" id="file" className="wallpaper"/>
            <label className="imageupload" htmlFor="file">Choose a file</label>
          </div>
        </div>
        {createBaby}
      </div>
    );
  }
}
