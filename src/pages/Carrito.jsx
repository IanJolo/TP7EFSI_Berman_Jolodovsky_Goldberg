import React, { useContext } from 'react';
import CarritoCard from '../components/CarritoCard';
import { CarritoContext } from '../context/CarritoContext';

export default function Carrito() {
  const { carrito } = useContext(CarritoContext);

  return (
    <>
      <div>Carrito</div>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        carrito.map((item, index) => (
          <CarritoCard key={index} producto={item} />
        ))
      )}
    </>
  );
}
