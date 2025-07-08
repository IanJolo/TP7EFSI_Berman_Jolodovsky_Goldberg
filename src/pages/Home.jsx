import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducto from '../components/CardProducto';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from './../assets/logo-white.png'

export default function Home() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar productos destacados:', error);
        setLoading(false);
      }
    };

    cargarProductosDestacados();
  }, []);

  const handleVerTodos = () => {
    navigate('/TP7EFSI_Berman_Jolodovsky_Goldberg/productos');
  };

  return (
    <div className="home-container">
      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a TuiTui</h1>
          <p className="hero-subtitle">Del comedor al living.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleVerTodos}>
              Ver Productos
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <img className='logo-blanco' src={logo} />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Envío Gratis</h3>
              <p>En compras superiores a $50.000</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Garantía</h3>
              <p>12 meses de garantía en todos los productos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Pagos Seguros</h3>
              <p>Múltiples métodos de pago disponibles</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>Soporte 24/7</h3>
              <p>Atención al cliente disponible todo el día</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Productos Destacados</h2>
            <p>Los productos más populares de nuestra tienda</p>
          </div>
          
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Cargando productos...</p>
            </div>
          ) : (
            <div className="products-grid">
              {productosDestacados.map(producto => (
                <CardProducto key={producto.id} producto={producto} />
              ))}
            </div>
          )}
          
          <div className="view-all-container">
            <button className="btn-view-all" onClick={handleVerTodos}>
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Explora por Categorías</h2>
            <p>Encuentra lo que buscas organizado por categorías</p>
          </div>
          <div className="categories-grid">
            <div className="category-card" onClick={() => navigate('/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/smartphones')}>
              <div className="category-icon">📱</div>
              <h3>Smartphones</h3>
            </div>
            <div className="category-card" onClick={() => navigate('/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/laptops')}>
              <div className="category-icon">💻</div>
              <h3>Laptops</h3>
            </div>
            <div className="category-card" onClick={() => navigate('/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/fragrances')}>
              <div className="category-icon">🌸</div>
              <h3>Fragrances</h3>
            </div>
            <div className="category-card" onClick={() => navigate('/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/skincare')}>
              <div className="category-icon">🧴</div>
              <h3>Skincare</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>¡Mantente Informado!</h2>
            <p>Suscríbete a nuestro newsletter y recibe las mejores ofertas</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="newsletter-input"
              />
              <button className="btn-newsletter">Suscribirse</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
