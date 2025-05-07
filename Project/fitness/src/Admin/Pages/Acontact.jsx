import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'

function Acontact() {

    const [data,setdata]=useState({

        id:"",
        name:"",
        title:"",
        logo:"",
        img:"",
        day:"",
        time:"",
        desc:""
    },[])

    const dataOnsubmit= async(e)=>{
        e.preventDefault()
 
         await axios.post("http://localhost:3000/cource",data);
        setdata({
         id:"",
        name:"",
        title:"",
        logo:"",
        img:"",
        day:"",
        time:"",
        desc:""
        })
    }
    const dataOnchange = (e)=>{
        setdata({
            ...data,
            id:new Date().getTime(),
            [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <Aheader />
            <div className="container py-5">
            <div className="col-lg-12 wow fadeInRight" data-wow-delay="0.4s">
                <div className="form-section bg-dark p-5 h-100">
                    <h1 className="display-4 text-white mb-4">Add Data</h1>
                    <form onSubmit={dataOnsubmit}>
                        <div className="row g-4">
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating form-section-col">
                                    <input  type="text" onChange={dataOnchange} name='name' value={data.name}  className="form-control border-0" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating form-section-col">
                                    <input type="text" onChange={dataOnchange} name='title' value={data.title} className="form-control border-0" id="title" placeholder="Your title" />
                                    <label htmlFor="title">Your Title</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating form-section-col">
                                    <input type="time" name='time' onChange={dataOnchange} value={data.time} className="form-control border-0" id="time" placeholder="time" />
                                    <label htmlFor="time">Your Time</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating form-section-col">
                                    <input type="text" onChange={dataOnchange} name='day' value={data.day} className="form-control border-0" id="day" placeholder="day" />
                                    <label htmlFor="project">Your day</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input type="url" name='logo' onChange={dataOnchange} value={data.logo} className="form-control border-0" id="logo" placeholder="select the  Logo" />
                                    <label htmlFor="logo"> Logo</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating form-section-col">
                                    <input name='img' value={data.img} type="img" onChange={dataOnchange} className="form-control border-0" id="image" placeholder="Image" />
                                    <label htmlFor="image">Image</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea name='desc' value={data.desc} onChange={dataOnchange} className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                         
                            <div className="col-12">
                                <div className="form-section-col">
                                    <button className="btn-primary w-100 py-3 px-5">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Acontact
