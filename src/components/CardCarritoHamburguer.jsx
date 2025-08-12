import React from 'react';
import './CardProducto.css';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import AjustarCantidadCarrito from './AjustarCantidadCarrito'

export default function CardCarritoHamburguer({ producto }) {

   
  return (
    <div className="card">
    
      <img src={producto.prod.images[0]} alt={producto.prod.title} />
      <Link to={`/producto/${producto.prod.id}`}><h2>{producto.title || 'Producto'}</h2></Link>
      <h3>{`$${producto.prod.price}`}</h3>
    
      
          <AjustarCantidadCarrito itemID={producto.prod.id } />
    </div>
  );
}
