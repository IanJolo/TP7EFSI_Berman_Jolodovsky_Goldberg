import React, { useState } from "react";
import  "./Contacto.css"
const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("¡Gracias por contactarnos!");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

