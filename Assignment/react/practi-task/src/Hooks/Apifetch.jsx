import React, { useEffect, useState } from 'react';
import axios from 'axios'


function Apifetch() {
  const [data, setdata] = useState([])
  
      useEffect(() => {
          fetchdata()
      }, [])
  
      const fetchdata = async () => {
          const res = await axios.get("https://fakestoreapi.com/products");
          // console.log(res.data)
          setdata(res.data)
          console.log(res.data)
  
      }
      return (
     <div>
       <div className=" row row-cols-1 row-cols-md-4 g-4">
      {
          data.map((value,index)=>{
              return(
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
     </div>
      )
}

export default Apifetch;
