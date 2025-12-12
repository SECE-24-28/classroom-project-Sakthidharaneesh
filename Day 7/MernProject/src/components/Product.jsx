import React from 'react'
import { useParams } from 'react-router-dom';


export default function Product() {
  const { id } = useParams();
  return (
    <div>Product
        <h3>Product Details</h3>
        <p>Product ID: {id}</p>
        
    </div>
  )
}
