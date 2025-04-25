import React, { useState } from "react";

function Form_obj() {

    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
  return (
    <div>
        <h1> email is:{email}</h1>
        <h1> password is:{password}</h1>
      <form className=" container col-5 mt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          value={email}
          onChange={(e)=>{setemail(e.target.value)}}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    
  );
}

export default Form_obj;
