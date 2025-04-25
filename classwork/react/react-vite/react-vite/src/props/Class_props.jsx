import React, { Component } from 'react'

export default class Class_props extends Component {
    constructor(props){
        super(props)
        this.data=props
    }
  render() {
    return (
      <div>
        <div>
      <h1 classname="text-danger">hello this is function</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.data.title}</h5>
          <p className="card-text">{this.data.desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
