import React, { use, useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'

function Adash() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    async function fetchdata() {
        const res = await axios.get("http://localhost:3000/cource")
        //  console.log(res.data)
        setdata(res.data)
    }

    return (
        <div>
            <Aheader />
            <div className="container my-5">

                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Day</th>
                            <th>Time</th>
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
                                                <img src={user.img} alt style={{ width: 45, height: 45 }} className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{user.id}</p>
                                                    <p className="text-muted mb-0">{user.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{user.title}</p>
                                            <p className="text-muted mb-0">{user.desc}</p>
                                        </td>
                                        <td>
                                        {user.day}
                                        </td>
                                        <td>{user.time}</td>
                                        <td>
                                     
                                        <button type="button" className="btn btn-info btn-md btn-rounded">
                                                View
                                            </button>
                                            <button type="button" className="btn btn-success btn-md btn-rounded mx-2">
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


        </div>
    )
}

export default Adash
