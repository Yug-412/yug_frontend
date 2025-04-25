import React, { useState } from "react";

function Form_object() {
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const formchange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
   
  const submitchange =(e)=>{
    setform({
        ...form,
        [e.target.name]:e.target.value
    })
  }
  return (
    <div>
  <h1>name is:</h1>
  <h1>email is:</h1>
  <h1>no is:</h1>
  <h1>password is :</h1>

      <form className=" container col-6 mt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputname" className="form-label">
            Name
          </label>
          <input
          onChange={formchange}
            value={form.name}
            name="name"
            type="text"
            className="form-control"
            id="exampleInputname"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
           onChange={formchange}
            value={form.email}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputphone" className="form-label">
            mobile-no
          </label>
          <input
           onChange={formchange}
            value={form.phone}
            name="phone"
            type="tel"
            className="form-control"
            id="exampleInputphone"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
           onChange={formchange}
            value={form.password}
            name="password"
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
        <button type="submit" className="btn btn-primary" onClick={submitchange} >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form_object;
