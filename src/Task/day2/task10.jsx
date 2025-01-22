import React, { useState } from 'react';

const RealTimeInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type"
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default RealTimeInput;
