import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducto from '../components/CardProducto';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      {/* Banner Principal */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a TechStore</h1>
          <p className="hero-subtitle">Descubre los mejores productos tecnológicos con calidad premium</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleVerTodos}>
              Ver Productos
            </button>
            <button className="btn-secondary">
              Ofertas Especiales
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>🚀</span>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
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

      {/* Productos Destacados */}
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

      {/* Sección de Categorías */}
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

      {/* Sección de Newsletter */}
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

      {/* Sección de Testimonios */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Lo que dicen nuestros clientes</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"Excelente servicio y productos de calidad. Muy recomendado!"</p>
              <div className="testimonial-author">
                <strong>María González</strong>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"Envío rápido y productos tal como se describen. Satisfecho!"</p>
              <div className="testimonial-author">
                <strong>Carlos Rodríguez</strong>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"La mejor tienda online que he encontrado. Precios justos!"</p>
              <div className="testimonial-author">
                <strong>Ana Martínez</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
