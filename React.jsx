import React, { useState } from 'react';

function SimpleCounter() {
  // 1. Declare a state variable named "count" initialized to 0
  const [count, setCount] = useState(0);

  // 2. Define the process to increase the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // 3. Define the process to reset the count
  const handleReset = () => {
    setCount(0);
  };

  // 4. Return the visual layout (JSX)
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Simple React Process Counter</h2>
      <p style={{ fontSize: '24px' }}>Current Count: <strong>{count}</strong></p>
      
      {/* Event handlers trigger the logic functions */}
      <button onClick={handleIncrement} style={buttonStyle}>
        Increment
      </button>
      <button onClick={handleReset} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>
        Reset
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px'
};

export default SimpleCounter;
