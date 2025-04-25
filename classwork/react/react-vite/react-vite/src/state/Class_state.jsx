import React, { Component } from 'react'

export default class Class_state extends Component {
   
    constructor(){
super();
this.state={
    name:"yug patel",
    count:0,
    course:"frontend devloper ",
    age:22
}
 
    }
    
  render() {
    let name1 ="yugpatel"

    return (
      <div>
        <h1>hello my name is:{name1}</h1>
        <h2>age is :{ this.state.age}</h2>
        <h1>count is:{this.state.count}</h1>
        <button className='btn btn-primary' onClick={()=>{this.setState({count:this.state.count +1})}}>increment</button>
        <button className='btn btn-danger' onClick={()=>{this.setState({count:this.state.count -1})}}>decrement</button>
        <button className='btn btn-dark' onClick={()=>{this.setState({count:0})}}>reset</button>

      </div>
    )
  }
}
