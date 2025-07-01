import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Navbar() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const { carrito } = useContext(CarritoContext);

  useEffect(()=>{
    let cant=0;
    carrito.map((i)=>{
      cant+=i.cant;
    })
    setCantidadCarrito(cant);
  },[carrito]);

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
        <p>{cantidadCarrito || '0'}</p>
        <AiOutlineShoppingCart />
      </Link>
    </nav>
  );
}

export default Navbar;
