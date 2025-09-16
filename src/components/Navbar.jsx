import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState, useContext, useRef } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Offcanvas } from 'bootstrap';
import CarritoAbsolute from './CarritoAbsolute';
import PropTypes from 'prop-types';

function Navbar() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const { carrito } = useContext(CarritoContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const carritoRef = useRef(null);
  const botonRef = useRef(null);



  useEffect(() => {
    let cant = 0;
    carrito.forEach(i => {
      cant += i.cant;
    });
    setCantidadCarrito(cant);
  }, [carrito]);
  
  const abrirCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        carritoRef.current &&
        !carritoRef.current.contains(event.target) &&
        botonRef.current &&
        !botonRef.current.contains(event.target)
      ) {
        setMostrarCarrito(false);
      }
    }

    if (mostrarCarrito) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mostrarCarrito]);

  return (
    <nav className="navbar">
      <div className='todo-navbar'>
        <Link to='/' className="logo">
          <img src={logo} className='logo' alt="Logo" />
          <span>TuiTui</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/productos" className="nav-link">Productos</Link>
          <Link to="/quienessomos" className="nav-link">Quiénes somos</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </div>

        <button 
          ref={botonRef}
          className="carrito-btn" 
          type="button" 
          onClick={abrirCarrito} 
          aria-label="Abrir carrito"
        >
          <span className="carrito-cantidad">{cantidadCarrito || '0'}</span>
          <AiOutlineShoppingCart size={24} />
        </button>
      </div>

      {mostrarCarrito && (
        <div ref={carritoRef}>
          <CarritoAbsolute setMostrarCarrito={setMostrarCarrito} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

