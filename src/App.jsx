import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/productoDetalle';
import MainLayout from './assets/layouts/mainLayout';
import { CarritoProvider } from './context/carritoProvider';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
import CompraExitosa from './pages/CompraExitosa';

function App() {
  return (
    <CarritoProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="quienessomos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:idProducto" element={<ProductoDetalle />} />
          <Route path="productos/:idCategoria" element={<Productos />} /> 
          <Route path="contacto" element={<Contacto />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="compra-exitosa" element={<CompraExitosa />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </CarritoProvider>
  );
}

export default App;
