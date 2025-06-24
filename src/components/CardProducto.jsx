import React from 'react';
import './CardProducto.css';

export default function CardProducto({ producto }) {
  return (
    <a href={`/TP7EFSI_Berman_Jolodovsky_Goldberg/producto/${producto.id}`} className="card">
      <img src={producto.images[0]} alt={producto.title} />
      <h2>{producto.title || 'Producto'}</h2>
      <h3>{`$${producto.price}`}</h3>
    </a>
  );
}
