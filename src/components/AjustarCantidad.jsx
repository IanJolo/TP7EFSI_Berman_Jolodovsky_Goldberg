import React, { use } from 'react'
import { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './AjustarCantidad.css';

export default function AjustarCantidad({ itemID }) {
    const { agregarCantCarrito, carrito } = useContext(CarritoContext);
    const itemCarrito = carrito.find(i => i.prod.id === itemID);
    const [cantidad, setCantidad] = useState(itemCarrito?.cant || 1);
  
    useEffect(() => {
      if (itemCarrito) {
        setCantidad(itemCarrito.cant);
      }
    }, [itemCarrito]);
  
    return (
      <div className='cantidad'>
        <button className='btn-secondary' onClick={() => agregarCantCarrito(itemCarrito.prod.id, cantidad - 1)}>-</button>
        <span>{cantidad}</span>
        <button className='btn-secondary' onClick={() => agregarCantCarrito(itemCarrito.prod.id, cantidad + 1)}>+</button>
      </div>
    );
  }