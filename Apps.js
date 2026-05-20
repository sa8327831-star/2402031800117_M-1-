import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>React Counter</h1>
      <p>Current Count: <strong>{count}</strong></p>
      
      {}
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px' }}
      >
        Increment
      </button>
      
      {}
      <button 
        onClick={() => setCount(0)}
        style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#ccc', border: 'none', borderRadius: '5px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterApp;
