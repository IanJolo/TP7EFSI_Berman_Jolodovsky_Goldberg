import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const { carrito } = useContext(CarritoContext);

  useEffect(() => {
    let cant = 0;
    carrito.forEach(i => {
      cant += i.cant;
    });
    setCantidadCarrito(cant);
  }, [carrito]);

  return (
    <nav className="navbar">
      <Link to='/' className="logo"><img src={logo} className='logo' /><span>TuiTui</span></Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/productos" className="nav-link">Productos</Link>
        <Link to="/quienessomos" className="nav-link">Quiénes somos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>
      <Link to="/carrito" className="carrito-link">
        <span className="carrito-cantidad">{cantidadCarrito || '0'}</span>
        <AiOutlineShoppingCart size={24} />
      </Link>
    </nav>
  );
}

export default Navbar;
