import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';


export default class getfooddata extends Component{
constructor(props){
  super(props);

  this.state = {
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    values: [],
    questions: [], choices: [] ,
    id:''
  }

  this.onSubmit = this.onSubmit.bind(this);
  this.onChangeid= this.onChangeid.bind(this);


}

onChangeid(e) {
  this.setState({
    id: e.target.value
  })
}





onSubmit(e){
  e.preventDefault();

axios.get('http://foodapivalues.somee.com/foodsearch/'+this.state.id)
 .then(res => {
   const values = res.data;
  this.setState({values });
  console.log(values)

})
  

}

render(){ 
  
  return(
<Container >
  <div> <h1> Enter FOOD NAME TO GET DATA</h1></div>

<form onSubmit={this.onSubmit}>
<TextField className="form-group" label="Enter Food Name"  required variant="outlined"  value={this.state.id}
              onChange={this.onChangeid} />
  <Button type="submit " variant="outlined" color="primary" className="btn btn-primary">
        SUBMIT
      </Button>
    
  <h1>{this.state.values} </h1>
     
</form>

</Container>
 )
}}



     
  
  
 
  
  
