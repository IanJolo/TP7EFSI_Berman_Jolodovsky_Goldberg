import React, { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  const { carrito, borrarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.direccion) {
      setError('Por favor, completá todos los campos.');
      return;
    }

    // Simula una compra exitosa
    borrarCarrito();
    navigate('/compra-exitosa');
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección de envío"
          value={formData.direccion}
          onChange={handleInputChange}
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn-primary">
          Confirmar compra
        </button>
      </form>

      <div className="checkout-resumen">
        <h3>Resumen del pedido</h3>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            <ul>
              {carrito.map((item, i) => (
                <li key={i}>
                  {item.nombre} × {item.cantidad} - ${item.precio * item.cantidad}
                </li>
              ))}
            </ul>
            <p className="total">Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
}
