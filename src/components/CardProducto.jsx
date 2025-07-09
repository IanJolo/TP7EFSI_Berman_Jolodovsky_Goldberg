import React from 'react';
import './CardProducto.css';
import { CarritoContext } from '../context/CarritoContext';
import { useEffect, useState, useContext } from 'react';
import AjustarCantidad from './AjustarCantidad';
import { Link } from 'react-router-dom';

export default function CardProducto({ producto }) {
  const [estaEnElCarrito, setEstaEnElCarrito] = useState(false);
  const { carrito, agregarAlCarrito} = useContext(CarritoContext);

  useEffect(() => {
    const encontrado = carrito.some(item => item.prod.id === producto.id);
    setEstaEnElCarrito(encontrado);
  }, [carrito]);
  
  const handleAgregar = () => {
    if (!estaEnElCarrito) { 
      agregarAlCarrito(producto);
      setEstaEnElCarrito(true);
    }
  }

   
  return (
    <div className="card">
    <Link to={`/producto/${producto.id}`}>
      <img src={producto.images[0]} alt={producto.title} />
      <h2>{producto.title || 'Producto'}</h2>
      <h3>{`$${producto.price}`}</h3>
    </Link>
      { !estaEnElCarrito ?(
        <button onClick={handleAgregar} className='btn-agregar'>Agregar</button>
      ) : (
        <div>
          <AjustarCantidad itemID={producto.id } />
        </div>
      )
      }
    </div>
  );
}
