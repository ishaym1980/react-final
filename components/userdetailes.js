import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default class Createuser extends Component {
  constructor(props) {
    super(props);

    this.onChangeName= this.onChangeName.bind(this);
    this.onChangeFamily = this.onChangeFamily.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeheight = this.onChangeheight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: '',
      Family: '',
      Age:'',
      height:'',
      Weight:'',
      Gender:'',
    }
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    })
  }

  onChangeFamily(e) {
    this.setState({
      Family: e.target.value
    })
  }
  onChangeAge(e) {
    this.setState({
      Age: e.target.value
    })
  }
  onChangeheight(e) {
    this.setState({
      height: e.target.value
    })
  }
  onChangeWeight(e) {
    this.setState({
      Weight: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      Gender: e.target.value
    })
  }
 

  onSubmit(e) {
    e.preventDefault();

    const creatuser = {
      username: this.state.Name,
      Family: this.state.Family,
      Age:this.state.age,
      height:this.state.height,
      Weight:this.state.Weight,
      Gender:this.state.Gender,


    }

    console.log(creatuser);

    axios.post('http://localhost:5000/users/insert', creatuser)
      .then(res => console.log(res.data));

   
  }

  render() {
    return (
    <div>
      <h3>Create New user</h3>
      <form onSubmit={this.onSubmit}>
           
      <div>
      <TextField className="form-group" label="Name"  required variant="outlined"  value={this.state.Name}
              onChange={this.onChangeName} />
        <TextField className="form-group" label="Family"  required variant="outlined"  value={this.state.Family}
              onChange={this.onChangeFamily} />
              <TextField className="form-group" label="Age"  required variant="outlined"  value={this.state.age}
              onChange={this.onChangeAge} />
        </div>
        <div>
      <TextField className="form-group" label="height"  required variant="outlined"  value={this.state.height}
              onChange={this.onChangeheight} />
      <TextField className="form-group" label="Weight"  required variant="outlined"  value={this.state.Weight}
              onChange={this.onChangeWeight} />
      <TextField className="form-group" label="Gender"  required variant="outlined"  value={this.state.Gender}
              onChange={this.onChangeGender} />

        </div>
        <div>
        </div>
        <div className="form-group">
          <Button type="submit " variant="outlined" color="primary" className="btn btn-primary">
        SUBMIT
      </Button>
        </div>
      </form>
    </div>
    )
  }
}
