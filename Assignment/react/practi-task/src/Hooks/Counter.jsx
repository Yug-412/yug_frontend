import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
  
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Counter: {count}</h1>
        <button onClick={increment} style={{ marginRight: '1rem' }}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}

export default Counter
