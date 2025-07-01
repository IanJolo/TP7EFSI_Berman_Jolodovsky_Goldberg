import React, { useState, useEffect } from 'react';
import { CarritoContext } from './CarritoContext';

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);


  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex(item => item.prod.id == producto.id);
      let nuevoCarrito;
      if (index !== -1) {
        nuevoCarrito = [...prevCarrito];
        nuevoCarrito[index] = {
          ...nuevoCarrito[index],
          cant: nuevoCarrito[index].cant + 1,
        };
      } else {
        nuevoCarrito = [...prevCarrito, { cant: 1, prod: producto }];
      }

      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };
  const agregarCantCarrito = (idProd, nuevaCant) => {
    setCarrito((prevCarrito) => {
      let nuevoCarrito;
      if (nuevaCant <= 0) {
        nuevoCarrito = prevCarrito.filter(item => item.prod.id !== idProd);
      } else {
        const index = prevCarrito.findIndex(item => item.prod.id === idProd);
  
        if (index !== -1) {
          nuevoCarrito = [...prevCarrito];
          nuevoCarrito[index] = {
            ...nuevoCarrito[index],
            cant: nuevaCant,
          };
        } else {
          return prevCarrito;
        }
      }
  
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };
  
  const eliminarDelCarrito = (idProducto) => {
    setCarrito((prev) => {
      const nuevoCarrito = prev.filter(item => item.prod.id !== idProducto);
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, agregarCantCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}
