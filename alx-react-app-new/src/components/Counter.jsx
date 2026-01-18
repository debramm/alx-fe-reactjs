import { useState } from 'react';

function Counter() {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter Application</h2>
      <p>Current Count: {count}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
