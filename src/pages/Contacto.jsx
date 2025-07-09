import React, { useState } from "react";
import "./Contacto.css"
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  emailjs.init('nakUWrDH1cw7NtNEb');
  const serviceID = 'service_toh0q67';
  const templateID = 'template_br38avy';

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Formulario enviado:", form);


    emailjs.send(serviceID, templateID, form)
      .then(response => {
        console.log('Email enviado', response.status, response.text);
        alert("¡Gracias por contactarnos!");
        setForm({ nombre: "", email: "", mensaje: "" });
      })
      .catch(error => {
        console.error('Error al enviar email', error);
        alert("¡Error al contactar!");
      });
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Tu email" value={form.email} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Tu mensaje" value={form.mensaje} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

