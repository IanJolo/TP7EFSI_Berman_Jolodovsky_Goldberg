import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductoDetalle.css';
import { CarritoContext } from '../context/CarritoContext';

export default function ProductoDetalle() {
  const { idProducto } = useParams();
  const url = `https://dummyjson.com/products/${idProducto}`;
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setProducto(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar producto:", error);
      });
  }, [idProducto]);

  if (!producto) return <div className="loading">Cargando producto...</div>;

  const agregarAlCarro = () => {
    let carro = localStorage.getItem('carrito');
    let carrito = carro ? JSON.parse(carro) : [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    agregarAlCarrito(producto);
  };

  return (
    <div className="producto-container">
      <img
        src={producto.images?.[0]}
        alt={producto.title}
        className="producto-imagen"
      />
      <div className="producto-info">
        <h1 className="producto-titulo">{producto.title}</h1>
        <p className="producto-descripcion">{producto.description}</p>
        <h2 className="producto-precio">${producto.price}</h2>
        <button
          className="btn-agregar-carrito"
          onClick={agregarAlCarro}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
