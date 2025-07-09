import React, { useContext } from 'react';
import './CarritoCard.css';
import { CarritoContext } from '../context/CarritoContext';
import { FaTrash } from 'react-icons/fa';
import AjustarCantidad from './AjustarCantidad';

export default function CarritoCard({ producto }) {
  const { eliminarDelCarrito, carrito } = useContext(CarritoContext); 
  const itemCarrito = carrito.find(item => item.prod.id === producto.prod.id);



  const handleEliminar = () => {
    eliminarDelCarrito(producto.prod.id);
  };

  return (
    <div className="carrito-card">
      <img src={producto.prod.thumbnail} alt={producto.prod.title} className="carrito-card-img" />
      <div className="carrito-card-info">
        <h3 className="carrito-card-title">{producto.prod.title}</h3>
        <p className="carrito-card-desc">{producto.prod.description}</p>
        <p className="carrito-card-price">${producto.prod.price}</p>
        <div className="carrito-card-cantidad">
          <AjustarCantidad itemID={producto.prod.id} />
        </div>
      </div>
      <button className="carrito-card-eliminar" onClick={handleEliminar} title="Eliminar del carrito">
        <FaTrash />
      </button>
    </div>
  );
}
