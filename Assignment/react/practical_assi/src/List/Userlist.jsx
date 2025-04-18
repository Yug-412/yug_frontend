import React from 'react'

function Userlist() {

    const user=[
        {id:1, name:"yug"},
        {id:2, name:"dharmik"},
        {id:3, name:"divyang"},
        {id:4, name:"dhruvil"}
    ]
        
    
  return (
    <div>
        <h1>user list</h1>
      {
  user.map((user)=>{
    return(
        <>
         <h1 key={user.id}>{`${user.id}:${user.name}`}</h1>
        
         </>
   
    )
  })
      }
    </div>
  )
}

export default Userlist
