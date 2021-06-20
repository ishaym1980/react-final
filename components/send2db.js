import React from 'react';
import axios from 'axios';


export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  
    axios({
      method: 'post',
      url: 'http://localhost:5000/',
      data: {
        firstName: 'Finn',
        lastName: 'Williams'
      }  
    });
    this.setState( {
      name: 'saved'
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>submit</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


