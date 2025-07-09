import React, { use } from 'react'
import { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './AjustarCantidad.css';
import Swal from 'sweetalert2';

export default function AjustarCantidad({ itemID }) {
  const { agregarCantCarrito, carrito } = useContext(CarritoContext);
  const itemCarrito = carrito.find(i => i.prod.id === itemID);
  const [cantidad, setCantidad] = useState(itemCarrito?.cant || 1);

  useEffect(() => {
    if (itemCarrito) {
      setCantidad(itemCarrito.cant);
    }
  }, [itemCarrito]);

  const handleRestar = () => {
    if (cantidad == 1) {
      Swal.fire({
        title: "¿Querés eliminar este producto del carrito?",
        text: itemCarrito.prod.title,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          agregarCantCarrito(itemCarrito.prod.id, cantidad - 1);
        }
      });
    } else {
      agregarCantCarrito(itemCarrito.prod.id, cantidad - 1);
    }

  }

  return (
    <div className='cantidad'>
      <button className='boton-sumar-restar' onClick={handleRestar}>-</button>
      <span>{cantidad}</span>
      <button className='boton-sumar-restar' onClick={() => agregarCantCarrito(itemCarrito.prod.id, cantidad + 1)}>+</button>
    </div>
  );
}