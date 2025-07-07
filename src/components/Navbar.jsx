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
      <div className="logo"><img src={logo} alt="TuiTui Logo" className='logo' /><span>TuiTui</span></div>
      <div className="nav-links">
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/" className="nav-link">Home</Link>
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/productos" className="nav-link">Productos</Link>
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/quienessomos" className="nav-link">Quiénes somos</Link>
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/contacto" className="nav-link">Contacto</Link>
      </div>
      <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/carrito" className="carrito-link">
        <span className="carrito-cantidad">{cantidadCarrito || '0'}</span>
        <AiOutlineShoppingCart size={24} />
      </Link>
    </nav>
  );
}

export default Navbar;
