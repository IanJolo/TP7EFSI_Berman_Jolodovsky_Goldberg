import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from 'react';

function Navbar() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    const carrito = localStorage.getItem('carrito');
    if (carrito) {
      try {
        const parsed = JSON.parse(carrito);
        setCantidadCarrito(parsed.length);
      } catch (e) {
        console.error('Carrito inválido en localStorage:', e);
        setCantidadCarrito(0);
      }
    } else {
      setCantidadCarrito(0);
    }
    window.addEventListener("storage", () => {
      const carritoActualizado = JSON.parse(localStorage.getItem('carrito') || '[]');
      setCantidadCarrito(carritoActualizado.length);
    });

  }, []);

  return (
    <nav className="navbar">
      <div className="logo">🛒 MiTienda</div>
      <div className="nav-links">
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/">Home</Link>
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/productos">Productos</Link>
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/quienessomos">Quiénes somos</Link>
        <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/contacto">Contacto</Link>
      </div>
      <Link to="/TP7EFSI_Berman_Jolodovsky_Goldberg/carrito" className='carrito'>
        <p>{cantidadCarrito}</p>
        <AiOutlineShoppingCart />
      </Link>
    </nav>
  );
}

export default Navbar;
