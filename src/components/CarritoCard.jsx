import React, { useContext } from 'react';
import './CarritoCard.css';
import { CarritoContext } from '../context/CarritoContext';
import { FaTrash } from 'react-icons/fa';

export default function CarritoCard({ producto }) {
  const { agregarCantCarrito, eliminarDelCarrito, carrito } = useContext(CarritoContext); 
  const itemCarrito = carrito.find(item => item.prod.id === producto.prod.id);
  const cantidad = itemCarrito?.cant || 1;

  const handleChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value);
    agregarCantCarrito(producto.prod.id, nuevaCantidad);
  };

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
          <label htmlFor={`cantidad-${producto.prod.id}`}>Cantidad:</label>
          <input
            id={`cantidad-${producto.prod.id}`}
            type="number"
            min={1}
            value={cantidad}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="carrito-card-eliminar" onClick={handleEliminar} title="Eliminar del carrito">
        <FaTrash />
      </button>
    </div>
  );
}
