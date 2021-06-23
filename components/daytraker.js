import react from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { Component } from 'react';
import axios from 'axios';




  
  
  

    export default class Chart extends Component {
        constructor(props) {
          super(props);
      
         
      
          this.state = {
            weight:'',
            date: '',
      
          }
        }
        componentDidMount() {
            axios.get('https://dry-beyond-40482.herokuapp.com/users/dashboard')
              .then(response => {
                if (response.data.length > 0) {
                  this.setState({
                    weight: response.data.map(weight =>weight ),
                    weight: response.data[0].weight
                  })
                }
              })
              .catch((error) => {
                console.log(error);
              })
        
          }
  
  
        render(){
    return (
      <BarChart
        width={500}
        height={300}
        data={this.state.weight}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}

