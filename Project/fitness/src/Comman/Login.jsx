
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';

function Login() {


    useEffect(() => {
        if (localStorage.getItem("name")) {
            redirect('/')
        }
    })



    const redirect1 = useNavigate()

    const [login, setlogin] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setlogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(login)
    }

    const handlecheck = async (e) => {
        e.preventDefault();

        const { email, password } = login;

        if (email == "" || password == "") {
            console.log("give me valid data")
            toast.error("give me valid data")
            return false
        }

        try {
            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)

            if (res.data.length == 0) {
                toast.error("pls valid email id");
                console.log("pls valid email id");

            }

            const admin = res.data[0]

            if (password != admin.password) {
                toast.error("password does not match")
            }


            localStorage.setItem("id", admin.id)
            localStorage.setItem("name", admin.name)
            redirect1('/')
            toast.success("login succesfull")


        } catch (error) {
            toast.error("Api is not  fetch..!", error)
            console.log("Api is not  fetch..!", error)
        }
    }

    const redirect = useNavigate()

    const registerpage = () => {
        redirect("/register")
    }
    return (
        <div>
            <form action=""  onSubmit={handlecheck}>  <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase text-light">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' onChange={getchange} name='email' value={login.email} size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' onChange={getchange} name='password' value={login.password} size="lg" />

                                <p className="small  pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                    Login
                                </MDBBtn>



                                <div>
                                    <p className="mb-0">Don't have an account? <a onClick={registerpage} class="text-white-50 fw-bold">Sign Up</a></p>

                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
            </form>

        </div>
    )
}

export default Login
