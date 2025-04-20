import React, { useState } from 'react';

function Usercard({ name, age, location }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>name is: {name}</h1>
      <h1>age is: {age}</h1>
      <h1>location is: {location}</h1>
      <br />
      <h1>count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default Usercard;
