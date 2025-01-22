import React, { useState } from 'react';

const Task9 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="toggle-paragraph">
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Show/Hidde text
      </button>
      {isVisible && <p className="paragraph">This is some hidden text!</p>}
    </div>
  );
};

export default Task9;
