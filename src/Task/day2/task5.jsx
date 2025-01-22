import React from 'react';

const Task5 = ({ avatar, name, email }) => {
  return (
    <div style={{backgroundColor:"#c4f0fe", width:"160px", display:"grid",justifyContent:"center", borderRadius:"20px",border:"black, 1px,solid"}}>
      <img style={{width:"90px", padding:"20px",  borderRadius:"40%"}} src={avatar} alt={`${name}'s avatar`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Task5;
