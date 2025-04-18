import React from 'react'

const Fruitlist = () => {
    let fruits=["mango","banana","apple","pinepal"]
    
    return (
        <div>
            {
                fruits.map((value,index)=>{
                    console.log(value)
                    return(
                        <h2 key={index}>{value}</h2>
                    )
                })
            }
        </div>
      )
}

export default Fruitlist
