import React from 'react';

const Task6 = ({ title, hLink, aLink, ctLink }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul style={{display:"flex", listStyle:"none",gap:"10px",textDecoration:"none"}}>
          <li><a href={hLink}>Home</a></li>
          <li><a href={aLink}>About</a></li>
          <li><a href={ctLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Task6;
