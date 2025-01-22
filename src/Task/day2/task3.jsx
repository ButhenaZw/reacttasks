import React from 'react'

export default function task3(props) {
  return (
    <div>
      <h1>Product Details:</h1>
      <div style={{color:"black",backgroundColor:"orange" ,width:"200px"}}>
        <h1>{props.productName}</h1>
        <p>Price:{props.price}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
