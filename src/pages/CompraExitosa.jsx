import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CompraExitosa.css';

export default function CompraExitosa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="compra-exitosa-container">
      <div className="mensaje">
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu pedido fue confirmado y está siendo procesado.</p>
        <p>Te enviaremos un correo con los detalles del pedido.</p>
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/" className="btn-volver">Volver al inicio</Link>
      </div>
    </div>
  );
}
