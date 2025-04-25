import React, { useState } from "react";

function Func_state() {
  const [count, setcount] = useState(0);

  return (
    
    <div>
 
      
      
      <h1>count is :{count}</h1>
      <button onClick={()=>{(setcount(count +1))}}>increment</button>
      <button onClick={()=>{(setcount(count -1))}}>decrement</button>
      <button onClick={()=>{(setcount(0))}}>reset</button>
      <h2>hiiii</h2>

     </div>
    
  );
  
}

export default Func_state;
