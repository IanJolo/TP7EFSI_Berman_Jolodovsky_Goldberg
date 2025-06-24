
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Navbar() {
    const { carrito } = useContext(CarritoContext);

  return (
    <nav className="navbar">
      <div className="logo">🛒 MiTienda</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/quienessomos">Quiénes somos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div className='carrito'>
        <p>{carrito.length}</p>
      </div>
    </nav>
  );
}

export default Navbar;
