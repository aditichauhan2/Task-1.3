import React, { useState } from 'react';  
import './counter.css';  

const Counter = () => {  
  const [count, setCount] = useState(0);  

  const increment = () => setCount((prevCount) => prevCount + 1);  
  const decrement = () => setCount((prevCount) => prevCount - 1);  
  const reset = () => setCount(0);  

  return (  
    <div className='Counter'>  
      <h2>Count: {count}</h2>  
      <button className = "increment" onClick={increment}>Increment</button>  
      <button className = "decrement" onClick={decrement}>Decrement</button>  
      <button className = "reset" onClick={reset}>Reset</button>  
    </div>  
  );  
};  

export default Counter;

