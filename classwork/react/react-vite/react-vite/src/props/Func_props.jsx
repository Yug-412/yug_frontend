import React from 'react'

function Func_props({img,title,desc}) {
  return (
    <div>
    <div>
      <div>
        <div>
          <h1 classname="text-danger">hello this is function</h1>
          <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Func_props;
