import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice'

function Count() {
  
    const count= useSelector((state)=>state.counter.value)

    const dispatch= useDispatch()
  return (
    <div>
      <h1> count is :{count}</h1>

      <button onClick={()=>dispatch(increment())} >increment</button>
       <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(zero())}>zero</button>
    </div>
  )
}

export default Count
