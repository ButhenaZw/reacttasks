import React, { useState } from 'react';

const Task11 = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div style={{ 
      backgroundColor: isDark ? '#333' : '#FFF', 
      color: isDark ? '#FFF' : '#000', 
      height: '100px', 
    }}>
      <button onClick={toggleTheme}>
        Toggle to {isDark ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default Task11;
