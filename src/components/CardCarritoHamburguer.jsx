import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import AjustarCantidadCarrito from './AjustarCantidadCarrito';
import './CardCarritoHamburguer.css';

export default function CardCarritoHamburguer({ producto, variant, onRemove }) {
  const { agregarCantCarrito } = useContext(CarritoContext);

  const prod = producto?.prod;
  const qty = producto?.cant ?? 1;
  if (!prod) return null;

  const totalFmt = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format((prod.price ?? 0) * qty);

  const handleRemove = () => {
    if (onRemove) onRemove();
    else agregarCantCarrito(prod.id, 0);
  };

  return (
    <div className="cartRow">
      <Link to={`/producto/${prod.id}`} className="cartThumb" aria-label={prod.title}>
        {prod.images?.[0] && <img src={prod.images[0]} alt={prod.title} />}
      </Link>

      <div className="cartInfo">
        <div className="cartTopLine">
          <Link to={`/producto/${prod.id}`} className="cartTitle">
            {prod.title}
          </Link>

          {(variant || prod.variant) && (
            <span className="cartVariant">
              ({variant || prod.variant})
            </span>
          )}

          <button
            type="button"
            className="cartRemove"
            onClick={handleRemove}
          >
            Borrar
          </button>
        </div>
      </div>

      <div className="cartQty">
        <AjustarCantidadCarrito itemID={prod.id} />
      </div>

      <div className="cartPrice">{totalFmt}</div>
    </div>
  );
}

const { shape, oneOfType, number, string, arrayOf, func } = PropTypes;

CardCarritoHamburguer.propTypes = {
  producto: shape({
    prod: shape({
      id: oneOfType([number, string]).isRequired,
      title: string,
      price: number,
      images: arrayOf(string),
      variant: string,
    }).isRequired,
    cant: number,
  }).isRequired,
  variant: string,
  onRemove: func,
};
