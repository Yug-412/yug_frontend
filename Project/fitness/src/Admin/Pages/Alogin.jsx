import axios from 'axios'
import React, { cloneElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Alogin() {

    useEffect(()=>{
        if(localStorage.getItem("name")){
            redirect('/dash')
        }
    })

    

    const redirect = useNavigate()

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
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            if (res.data.length == 0) {
                toast.error("pls valid email id");
                console.log("pls valid email id");

            }

            const admin = res.data[0]

            if (password != admin.password) {
                toast.error("password does not match")
            }
          

            localStorage.setItem("id",admin.id)
            localStorage.setItem("name",admin.name)
            redirect('/dash')
            toast.success("login succesfull")


        } catch (error) {
            toast.error("Api is not  fetch..!", error)
            console.log("Api is not  fetch..!", error)
        }
    }
    return (
        <div>
            <form action="" onSubmit={handlecheck}>
                <section className="vh-100 gradient-custom">
                    <div className="container py-2 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold text-light mb-2 text-uppercase">Login</h2>
                                            <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                                <label className="form-label" htmlFor="typeEmailX">Email</label>
                                                <input type="email" name='email' onChange={getchange} value={login.email} id="typeEmailX" className="form-control form-control-lg" />

                                            </div>
                                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                                                <input type="password" id="typePasswordX" name='password' value={login.password} onChange={getchange} className="form-control form-control-lg" />

                                            </div>
                                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light bg-info btn-lg px-5" type="submit">Login</button>

                                        </div>
                                        <div>
                                            <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>

        </div>
    )
}

export default Alogin
