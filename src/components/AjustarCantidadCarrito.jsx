import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { CarritoContext } from '../context/CarritoContext';
import './AjustarCantidadCarrito.css';

export default function AjustarCantidadCarrito({ itemID }) {
  const { agregarCantCarrito, carrito } = useContext(CarritoContext);
  const itemCarrito = carrito.find(i => i?.prod?.id === itemID);
  const [cantidad, setCantidad] = useState(itemCarrito?.cant || 1);

  useEffect(() => {
    if (itemCarrito?.cant != null) setCantidad(itemCarrito.cant);
  }, [itemCarrito?.cant]);

  const restar = async () => {
    if (cantidad <= 1) {
      const res = await Swal.fire({
        title: '¿Querés eliminar este producto?',
        text: itemCarrito?.prod?.title || 'Producto',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      });
      if (res.isConfirmed) agregarCantCarrito(itemID, 0);
      return;
    }
    agregarCantCarrito(itemID, cantidad - 1);
  };

  const sumar = () => {
    agregarCantCarrito(itemID, cantidad + 1);
  };

  return (
    <div className="qty" aria-label="Selector de cantidad">
      <button className="qty-btn" onClick={restar} aria-label="Restar">–</button>
      <span className="qty-value" aria-live="polite">{cantidad}</span>
      <button className="qty-btn" onClick={sumar} aria-label="Sumar">+</button>
    </div>
  );
}

const { oneOfType, number, string } = PropTypes;

AjustarCantidadCarrito.propTypes = {
  itemID: number.isRequired,
};
