import React, { useState, useMemo, useCallback } from 'react';
import '../styles/Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Memoizing whether decrement and reset should be disabled
  const isDisabled = useMemo(() => count === 0, [count]);

  // Memoized callback functions
  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => prev - 1), []);
  const reset = useCallback(() => setCount(0), []);

  return (
    <div className='Counter'>  
      <div className="button-container">
        <button className="decrement" onClick={decrement} disabled={isDisabled}>Decrement</button>  
        <h2>{count}</h2>  
        <button className="increment" onClick={increment}>Increment</button>  
      </div>
      <button className="reset" onClick={reset} disabled={isDisabled}>Reset</button>  
    </div>  
  );
};

export default Counter;
