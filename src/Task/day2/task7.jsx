import React from 'react';
const Task7 = ({ label, onClick }) => {
  const handleClick = () => {
    alert('Button clicked!');
    if (onClick) onClick();
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

export default Task7;
