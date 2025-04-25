import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useeffect() {

    const [data, setdata] = useState([])
    useEffect(() => {
        showdata()
    }, [])
    const showdata = async () => {

        // fetch("https://fakestoreapi.in/api/products", {
        //     method: "GET"
        // })
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((data) => {
        //         console.log(data.products)
        //         setdata(data.products)
        //     })
             const res=await axios.get("https://fakestoreapi.in/api/products")
            //  console.log(res.data)
            setdata(res.products)
    }
    return (
        <>
            <div className=" row row-cols-1 row-cols-md-4 g-4">
                {
                    data.map((value, index) => {
                        return (
                            <div className="col" key={index}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={value.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.price}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>

                            </div>
                        )

                    })

                }
            </div>

        </>
    )
}

export default useeffect
