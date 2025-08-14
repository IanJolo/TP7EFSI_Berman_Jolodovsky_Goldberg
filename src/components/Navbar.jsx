import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Navbar.css';
import logo from '../assets/logo.png';
import CardCarritoHamburguer from './CardCarritoHamburguer';
import { Offcanvas } from 'bootstrap';

function Navbar() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const { carrito } = useContext(CarritoContext);

 // ✅ LÓGICA para bloquear el scroll cuando se abre el offcanvas
 useEffect(() => {
  const el = document.getElementById('offcanvasNavbar');
  if (!el) return;

  // Crea/recupera instancia y fuerza opciones correctas
  Offcanvas.getOrCreateInstance(el, { scroll: false, backdrop: true });

  const onShown = () => document.documentElement.classList.add('lock-scroll');
  const onHidden = () => document.documentElement.classList.remove('lock-scroll');

  el.addEventListener('shown.bs.offcanvas', onShown);
  el.addEventListener('hidden.bs.offcanvas', onHidden);

  return () => {
    el.removeEventListener('shown.bs.offcanvas', onShown);
    el.removeEventListener('hidden.bs.offcanvas', onHidden);
  };
}, []);

  useEffect(() => {
    let cant = 0;
    carrito.forEach(i => {
      cant += i.cant;
    });
    setCantidadCarrito(cant);
  }, [carrito]);
  

  return (
    <nav className="navbar">
      <div className='todo-navbar'>
      <Link to='/' className="logo"><img src={logo} className='logo' /><span>TuiTui</span></Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/productos" className="nav-link">Productos</Link>
        <Link to="/quienessomos" className="nav-link">Quiénes somos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>


      <button className="carrito-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Abrir carrito">
      <span className="carrito-cantidad">{cantidadCarrito || '0'}</span>
        <AiOutlineShoppingCart size={24} />
    </button>
    </div>



    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-scroll="false" data-bs-backdrop="true">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Carrito</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="productos-carrito-ham">
          {
            
            carrito.map((element, i) => {
                return <CardCarritoHamburguer key={i} producto={element}  />
            })
          }
        </div>
      </div>
    </div>

    </nav>
  );
}

export default Navbar;
