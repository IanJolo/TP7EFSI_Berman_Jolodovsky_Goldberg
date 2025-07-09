import React, { useContext, useEffect } from 'react';
import CarritoCard from '../components/CarritoCard';
import { CarritoContext } from '../context/CarritoContext';
import './Carrito.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Carrito() {
  const { carrito, borrarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }, []);

  const handleBorrarCarrito=()=>{
    Swal.fire({
                    title: "¿Estás seguro que querés borrar el carrito?",
                    text:  itemCarrito.prod.title,
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si",
                    cancelButtonText: "Cancelar"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      borrarCarrito();
                    }
                  });
  }
  const handleComprar=()=>{
    navigate('/checkout');
  }

  return (
    <>
      <div><h2>Carrito</h2></div>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        carrito.map((item, index) => (
          <CarritoCard key={index} producto={item} />
        ))
      )}
      <div className='botones-abajo'>
          <button onClick={handleBorrarCarrito} className="btn-secondary" disabled={carrito.length==0}>Borrar carrito</button>
          <button onClick={handleComprar} className="btn-primary" disabled={carrito.length==0}>Finalizar compra</button>
      </div>
    </>
  );
}
