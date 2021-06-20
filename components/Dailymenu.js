import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class DailyMenu extends Component {
  constructor(props) {
    super(props);

    this.onChangeWeight = this.onChangeWeight.bind(this); 
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      weight:'',
      date: new Date(),

    }
  }

  onChangeWeight(e) {
    this.setState({
      weight:e.target.value
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const mymenu = {
      weight:this.state.weight,
      date: this.state.date
    }

    console.log(mymenu);

    axios.post('http://localhost:5000/users/insert', mymenu)
      .then(res => console.log(res.data));

   
  }

  render() {
    return (
    
        <form onSubmit={this.onSubmit}> 
         
         <div className="form-group">
        <p>My Weight Today</p>
        <TextField className="form-group" label="Weight"  required variant="outlined"  value={this.state.weight}
              onChange={this.onChangeWeight} />
       
       </div>
  
  
       <Button className="form-group" type="submit " variant="outlined" color="primary" >
        SUBMIT
      </Button>
      </form>
    
      
    )
  }
}