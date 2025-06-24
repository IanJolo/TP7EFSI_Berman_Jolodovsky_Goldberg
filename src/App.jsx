import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import MainLayout from './assets/layouts/mainLayout';
import { CarritoProvider } from './context/carritoProvider';

function App() {
  return (
    <CarritoProvider>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="quienessomos" element={<QuienesSomos />} />
        <Route path="productos" element={<Productos />} />
        <Route path="producto/:idProducto" element={<ProductoDetalle />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
    </CarritoProvider>
  );
}

export default App;
