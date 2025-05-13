import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    img: "",
    status: ""
  })




  const handlechange = (e) => {
    setdata({
      ...data,
      id: new Date().getTime().toString(),
      status: "unblock",
      [e.target.name]: e.target.value
    })
    console.log(data)
  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (data.name == "" || data.email == "" || data.password == "" || data.img == "") {
      toast.error("pls feel the all feild")

    }
    try {
      const res = await axios.post("http://localhost:3000/user",data)
      setdata(res.data)
      redirect('/login')
      toast.success("register data succesfull")

    } catch {

    }






  }
  const redirect = useNavigate()

  const loginpage = () => {
    redirect('/login')
  }

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>

        <MDBContainer fluid className='d-flex align-items-center justify-content-center ' >
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5' style={{ backgroundColor: "aliceblue" }}>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <MDBInput wrapperClass='mb-4' onChange={handlechange} name='name' value={data.name} label='Your Name' size='lg' id='form1' type='text' />
              <MDBInput wrapperClass='mb-4' onChange={handlechange} name='email' value={data.email} label='Your Email' size='lg' id='form2' type='email' />
              <MDBInput wrapperClass='mb-4' onChange={handlechange} name='password' value={data.password} label='Password' size='lg' id='form3' type='password' />
              <MDBInput wrapperClass='mb-4' onChange={handlechange} name='img' value={data.img} label='image' size='lg' id='form4' type='url' />
              <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
              </div>
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
              <div>
                <p>already have a account? <a onClick={loginpage} className='text-info' >Login</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>

    </div>
  )
}

export default Register
