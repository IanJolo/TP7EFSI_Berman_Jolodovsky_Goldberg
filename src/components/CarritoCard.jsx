
import React from 'react';
import './CarritoCard.css'; 

export default function CarritoCard({ producto }) {
  return (
    <div className="carrito-card">
      <img src={producto.thumbnail} alt={producto.title} className="carrito-card-img" />
      <div className="carrito-card-info">
        <h3>{producto.title}</h3>
        <p>{producto.description}</p>
        <p><strong>${producto.price}</strong></p>
      </div>
    </div>
  );
}
