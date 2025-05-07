import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
// import axios from 'axios'


function Aabout() {

    useEffect(()=>{
        teamdata();
    })

    const[data,setdata]=useState([])

    const teamdata=async()=>{

        const res=await axios.get("http://localhost:3000/trainer")
        setdata(res.data)
    }
  return (
    <div>
    <Aheader />
    <div className="container my-5">

        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
                <tr>
                  
                    <th className='px-5'>Name</th>
                    <th>Profetion</th>
                    
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {
                    data && data.map((user) => {
                        return (
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={user.img} alt style={{ width: 105, height: 85 }} className="rounded-circle" />
                                        <div className="ms-lg-5">
                                            <p className="fw-bold mb-1"><span>    </span> {user.name}</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{user.profe}</p>
                                    <p className="text-muted mb-0">{user.desc}</p>
                                </td>
                               
                                <td>

                                    <button type="button" className="btn btn-info btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View
                                    </button>
                                    <button type="button"  className="btn btn-success btn-md btn-rounded mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        Edit
                                    </button>
                                    <button type="button" className="btn btn-danger btn-md btn-rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )

                    })


                }


            </tbody>
        </table>
    </div>
    {/* // <!-- view Modal --> */}
    {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title " id="exampleModalLabel">View Data</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="container ">
                        <div className="row gy-4 gx-0 justify-content-center">
                            <div className="col-md-12  wow fadeInUp" data-wow-delay="0.2s">
                                <div className="courses-item">
                                    <div className="courses-item-inner p-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="courses-icon-img p-3">
                                                <img
                                                    src="https://th.bing.com/th/id/OIP.QtJ2GwBQ-QPfeZtuDafmoQHaF7?w=199&h=180&c=7&r=0&o=5&pid=1.7"
                                                    className="img-fluid"
                                                    alt="Course"
                                                />
                                            </div>
                                            <div className="data-info d-flex flex-column">
                                                <div className="courses-trainer d-flex align-items-center mb-1">
                                                    <div className="me-2" style={{ width: 50, height: 50 }}>
                                                        <img
                                                            src={view.img}
                                                            className="img-fluid rounded-circle"
                                                            alt="Trainer"
                                                        />
                                                    </div>
                                                    <p className="mb-0">{view.name}</p>
                                                </div>
                                                <div className="courses-date">
                                                    <p className="mb-1">Date: {view.day}</p>
                                                    <p className="mb-0">Time: {view.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="d-inline-block h4 mb-3">{view.title}</a>
                                        <p className="mb-4">{view.desc}</p>
                                        <a href="#" className="btn btn-primary py-2 px-4">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div> */}



    {/* <!-- Update Modal --> */}
    {/* <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <div className="container py-5">
                        <div className="col-lg-12 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="form-section bg-dark p-5 h-100">
                                <h1 className="display-4 text-white mb-4">Update Data</h1>

                                <form>
                                    <div className="row g-4">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="text" name='name' value={update.name}
                                                    onChange={onhandleChange}
                                                    className="form-control border-0" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="text" name='title' value={update.title}
                                                    onChange={onhandleChange} className="form-control border-0" id="title" placeholder="Your title" />
                                                <label htmlFor="title">Your Title</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="time" name='time' value={update.time} onChange={onhandleChange} className="form-control border-0" id="time" placeholder="time" />
                                                <label htmlFor="time">Your Time</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating form-section-col">
                                                <input type="text" name='day' value={update.day} onChange={onhandleChange} className="form-control border-0" id="day" placeholder="day" />
                                                <label htmlFor="project">Your day</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating form-section-col">
                                                <input type="url" name='logo' value={update.logo} onChange={onhandleChange} className="form-control border-0" id="url" placeholder="select the  Logo" />
                                                <label htmlFor="img"> logo</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating form-section-col">
                                                <input type="url" name='img' value={update.img} onChange={onhandleChange} className="form-control border-0" id="url" />
                                                <label htmlFor="image"> image</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea name='desc' value={update.desc} onChange={onhandleChange} className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="row">

                                                <div className="form-section-col col-6">
                                                    <button onClick={updatedata} className="btn-primary w-100 py-3 px-5">Submit</button>
                                                </div>
                                                <div className="form-section-col col-6">
                                                    <button type='buttton' className="btn-primary w-100 py-3 px-5" data-bs-dismiss="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div> */}



</div>

  )
}

export default Aabout
