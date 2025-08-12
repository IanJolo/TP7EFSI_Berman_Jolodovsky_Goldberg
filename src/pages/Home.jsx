import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducto from '../components/CardProducto';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from './../assets/logo-white.png'
import CarruselDestacados from '../pages/CarruselDestacados';

export default function Home() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  useEffect(() => {
    const cargarProductosDestacados = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=6');
        setProductosDestacados(response.data.products);
      } catch (error) {
        console.error('Error al cargar productos destacados:', error);
      }
    };

    cargarProductosDestacados();
  }, []);

  const handleVerTodos = () => {
    navigate('/productos');
  };

  return (
    <div className="home-container">
      <section className="home-banner">
        <div className="home-content">
          <h1 className="home-title">Bienvenido a TuiTui</h1>
          <p className="home-subtitle">Del comedor al living.</p>
          <div className="home-buttons">
            <button className="boton-primario" onClick={handleVerTodos}> Ver Productos </button>
          </div>
        </div>
        <div className="home-image">
          <div className="home-placeholder">
            <img className='logo-blanco' src={logo} />
          </div>
        </div>
      </section>


      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Productos Destacados</h2>
            <p>Los productos más populares de nuestra tienda</p>
          </div>


          <div className="products-grid">
            {productosDestacados.map((producto, i) => (
              <CardProducto key={i} producto={producto} />
            ))}
          </div>


          <div className="view-all-container">
            <button className="btn-view-all" onClick={handleVerTodos}>
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>

      <div className="section-header">
        <h2>Descuentos exclusivos en tienda Apple</h2>
        <p>Encuentra lo que buscas en Apple con hasta un 20% OFF</p>
      </div>

      <CarruselDestacados />
    </div>
  );
}
