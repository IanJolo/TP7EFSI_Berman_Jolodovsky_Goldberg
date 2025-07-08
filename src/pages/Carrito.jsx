import React, { useContext, useEffect } from 'react';
import CarritoCard from '../components/CarritoCard';
import { CarritoContext } from '../context/CarritoContext';

export default function Carrito() {
  const { carrito } = useContext(CarritoContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }, []);
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
