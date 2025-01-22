import React from 'react'

export default function Task4(props) {
  return (
    <div>
      <h1>User Information</h1>
      <p>Username:{props.name}</p>
      <p>Email:{props.email}</p>
      <p>Age:{props.age}</p>
    </div>
  )
}
