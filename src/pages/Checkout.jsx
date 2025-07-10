import React, { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import emailjs from "@emailjs/browser";

export default function Checkout() {
    emailjs.init('nakUWrDH1cw7NtNEb');
  const { carrito, borrarCarrito } = useContext(CarritoContext);
  const [total,setTotal]=useState(0);
  const navigate = useNavigate();
  const serviceID='service_toh0q67';
  const templateID='template_meuwnvh';

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(carrito)
  }, []);
  useEffect(()=>{
    const totalCalculado = carrito.reduce((acc, item) => acc + item.cant * item.prod.price, 0);
    setTotal(parseFloat(totalCalculado.toFixed(2)));
  },[carrito])



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.nombre || !formData.email || !formData.direccion) {
      setError('Por favor, completá todos los campos.');
      return;
    }
  
    const productsString = carrito
      .map(item => `${item.cant} x ${item.prod.title} - $${item.prod.price * item.cant}`)
      .join('\n');
  
    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      direccion: formData.direccion,
      products: productsString,

    };


    emailjs.send(serviceID, templateID, templateParams)
      .then(response => {
        console.log('Email enviado', response.status, response.text);
        borrarCarrito();
        navigate('/compra-exitosa');
      })
      .catch(error => {
        console.error('Error al enviar email', error);
        setError('Error al enviar el email. Por favor, intenta nuevamente.');
      });
  };
  
  

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleInputChange}/>
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange}/>
        <input type="text" name="direccion" placeholder="Dirección de envío" value={formData.direccion} onChange={handleInputChange}/>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="boton-primario">Confirmar compra</button>
      </form>

      <div className="checkout-resumen">
        <h3>Resumen del pedido</h3>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            <ul>
              {carrito.map((item, i) => (
                <li key={i}>
                 {item.cant} x ${item.prod.title} - $${item.prod.price * item.cant}
                </li>
              ))}
            </ul>
            <p className="total">Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
}
