import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import './Navbar.css';
import logo from '../assets/logo.png';
import CardCarritoHamburguer from './CardCarritoHamburguer';

function Navbar() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const { carrito } = useContext(CarritoContext);

  useEffect(() => {
    console.log(carrito);
  }, []);

  useEffect(() => {
    let cant = 0;
    carrito.forEach(i => {
      cant += i.cant;
    });
    setCantidadCarrito(cant);
    console.log(carrito);
  }, [carrito]);

  // Manejar los estilos del body cuando se abre/cierra el offcanvas
  useEffect(() => {
    const handleOffcanvasShow = () => {
      document.body.style.overflowX = 'hidden';
      document.body.style.paddingRight = '0';
    };

    const handleOffcanvasHide = () => {
      document.body.style.overflowX = 'hidden';
      document.body.style.paddingRight = '0';
      // Remover cualquier clase que Bootstrap haya agregado
      document.body.classList.remove('modal-open');
    };

    // Función para cerrar el offcanvas
    const closeOffcanvas = () => {
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      if (offcanvasElement) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
      }
    };

    // Escuchar eventos del offcanvas
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      offcanvasElement.addEventListener('show.bs.offcanvas', handleOffcanvasShow);
      offcanvasElement.addEventListener('hide.bs.offcanvas', handleOffcanvasHide);
      offcanvasElement.addEventListener('hidden.bs.offcanvas', handleOffcanvasHide);
      
      // Agregar event listener para el backdrop (click fuera del menú)
      offcanvasElement.addEventListener('click', (e) => {
        // Si el click es en el backdrop (fuera del contenido del offcanvas)
        if (e.target === offcanvasElement) {
          closeOffcanvas();
        }
      });
    }

    // Cleanup
    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener('show.bs.offcanvas', handleOffcanvasShow);
        offcanvasElement.removeEventListener('hide.bs.offcanvas', handleOffcanvasHide);
        offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleOffcanvasHide);
        offcanvasElement.removeEventListener('click', closeOffcanvas);
      }
      // Asegurar que el body esté limpio al desmontar
      document.body.style.overflowX = 'hidden';
      document.body.style.paddingRight = '0';
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <nav className="navbar">
      <div className='todo-navbar'>
      <Link to='/' className="logo"><img src={logo} className='logo' /><span>TuiTui</span></Link>
      <div className="nav-links">
        <Link to="//" className="nav-link">Home</Link>
        <Link to="/productos" className="nav-link">Productos</Link>
        <Link to="/quienessomos" className="nav-link">Quiénes somos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>


      <button className="nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="carrito-cantidad">{cantidadCarrito || '0'}</span>
        <AiOutlineShoppingCart size={24} />
    </button>
    </div>



    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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
