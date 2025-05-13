import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



function Header() {
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
        getdata(id);
    }
}, []);

const changedata=(e)=>{
    setdata(
       {
         ...data,
        [e.target.name]:e.target.value
       }
      
    )
     console.log(data)
}
 
    const [data, setdata] = useState({
        name: "",
        email: "",
        img: ""
    })

    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        setdata(res.data)
        console.log(res.data)
    }


   const updatedata = async (id) => {
    try {
        const res = await axios.put(`http://localhost:3000/user/${id}`, data);
        setdata(res.data);
        toast.success("Data updated successfully");
    } catch (error) {
        console.error("Update error:", error);
        toast.error("Failed to update data");
    }
};

    const redirect = useNavigate()

    const loginpage = () => {
        redirect('/login')
    }
    const registerpage = () => {
        redirect("/register")
    }
    const logout = () => {

        localStorage.removeItem("id")
        localStorage.removeItem("name")
        redirect("/")
    }

    return (
        <div>

            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-fluid header-top">
                <div className="nav-shaps-2" />
                <div className="container d-flex align-items-center">
                    <div className="d-flex align-items-center h-100">
                        <a href="#" className="navbar-brand" style={{ height: 125 }}>
                            <h1 className="text-primary mb-0"><i className="fas fa-hand-rock me-2" /> Fitness</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                    </div>
                    <div className="w-100 h-100">
                        <div className="topbar px-0 py-2 d-none d-lg-block" style={{ height: 45 }}>
                            <div className="row gx-0 align-items-center">
                                <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                                    <div className="d-flex flex-wrap">
                                        <div className="pe-4">
                                            <a href="mailto:example@gmail.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2" />example@gmail.com</a>
                                        </div>
                                        <div className="pe-0">
                                            <a href="mailto:example@gmail.com" className="text-muted small"><i className="fa fa-clock text-primary me-2" />Mon - Sat: 8.00 am-7.00 pm</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center text-lg-end">
                                    <div className="d-flex justify-content-end">
                                        <div className="d-flex align-items-center small">

                                            {
                                                (() => {
                                                    if (localStorage.getItem("id")) {
                                                        return (
                                                            <>
                                                                <a className="login-btn text-body me-3 pe-1"> <span >Hello {localStorage.getItem("name")}</span></a>
                                                                <a onClick={logout} className="login-btn text-body me-3 pe-1"> <span > logout</span></a>

                                                            </>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <> <a onClick={loginpage} className="login-btn text-body me-3 pe-1"> <span >login</span></a>
                                                                <a onClick={registerpage} className="login-btn text-body me-3 pe-1"> <span  > register</span></a></>
                                                        )
                                                    }
                                                })()


                                            }

                                        </div>
                                        <div className="d-flex pe-3">
                                            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-facebook-f" /></a>
                                            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter" /></a>
                                            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-instagram" /></a>
                                            <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>

                                    </div>
                                    { }
                                </div>
                            </div>
                        </div>
                        <div className="nav-bar px-0 py-lg-0" style={{ height: 80 }}>
                            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                                <a href="#" className="navbar-brand-2">
                                    <h1 className="text-primary mb-0"><i className="fas fa-hand-rock me-2" /> Fitness</h1>
                                    {/* <img src="img/logo.png" alt="Logo"> */}
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="fa fa-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="navbar-nav mx-0 mx-lg-auto">
                                        <NavLink to='/' className="nav-item nav-link ">Home</NavLink>
                                        <NavLink to='/about' className="nav-item nav-link">About</NavLink>
                                        <NavLink to='/course' className="nav-item nav-link">Courses</NavLink>
                                        <NavLink to='/blog' className="nav-item nav-link">Blogs</NavLink>
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                                <span className="dropdown-toggle">Pages</span>
                                            </a>
                                            <div className="dropdown-menu">
                                                <NavLink to='/feature' className="dropdown-item">Our Features</NavLink>
                                                <NavLink to='/team' className="dropdown-item">Our team</NavLink>
                                                <NavLink to='/test' className="dropdown-item">Testimonial</NavLink>

                                            </div>
                                        </div>
                                        <NavLink to='/contact' className="nav-item nav-link">Contact</NavLink>
                                        <div className="nav-btn ps-3">
                                            <button
                                                className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0"
                                                data-bs-toggle="modal"
                                                data-bs-target="#searchModal"
                                            >
                                                <i className="fas fa-search" />
                                            </button>

                                            {localStorage.getItem("id") ? (
                                                <a data-bs-toggle="modal" data-bs-target="#exampleModal3" className="btn btn-primary py-2 px-4 ms-0 ms-lg-3  " >
                                                    <span  >Profile</span>
                                                </a>
                                            ) : (
                                                <a className="btn btn-primary py-2 px-4 ms-0 ms-lg-3">
                                                    <span>Get Quote</span>
                                                </a>
                                            )}
                                        </div>

                                        <div className="nav-shaps-1" />

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Navbar & Hero End --> */}


            {
                // <!-- Modal -->
                <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-info ">
                                <h1 className="modal-title " id="exampleModalLabel">profile</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">

                                <form>
                                    <div className="row py-3">

                                        <div className="form-group col-6 ">
                                            <label htmlFor="">name</label>
                                            <input type="text" name='name'  onChange={changedata} value={data.name} className="form-control" id="inputname1" placeholder="name" />
                                        </div>

                                        <div className="form-group col-6">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" name='email' onChange={changedata} value={data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                        </div>
                                    </div>
                                    <div className="form-group py-2 ">
                                        <label htmlFor="">iamge</label>
                                        <input type="url" name='img'  onChange={changedata} value={data.img} className="form-control" id="inputname1" placeholder="url" />
                                    </div>



                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={()=>updatedata(localStorage.getItem("id"))}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Header







