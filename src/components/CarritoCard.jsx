import React, { useContext } from 'react';
import './CarritoCard.css';
import { CarritoContext } from '../context/CarritoContext';

export default function CarritoCard({ producto }) {
  const { agregarCantCarrito, carrito } = useContext(CarritoContext); 
  const itemCarrito = carrito.find(item => item.prod.id === producto.prod.id);
  const cantidad = itemCarrito?.cant || 0;

  const handleChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value);
    agregarCantCarrito(producto.prod.id, nuevaCantidad);
  };

  return (
    <div className="carrito-card">
      <img src={producto.prod.thumbnail} alt={producto.prod.title} className="carrito-card-img" />
      <div className="carrito-card-info">
        <h3>{producto.prod.title}</h3>
        <p>{producto.prod.description}</p>
        <p><strong>${producto.prod.price}</strong></p>
      </div>
      <input
        type="number"
        min={1}
        value={cantidad || 1}
        onChange={handleChange}
      />
    </div>
  );
}
