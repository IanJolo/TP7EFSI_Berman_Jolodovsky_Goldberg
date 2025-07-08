import React from "react";
import "./QuienesSomos.css";
import jolo from "./../assets/jolo.png";
import berman from "./../assets/berman.png";
import tomi from "./../assets/tomi.png";
import { useEffect } from "react";

export default function QuienesSomos() {
  
  const integrantes = [
    {
      nombre: "Tomi Goldberg",
      rol: "Desarrollo & Diseño",
      descripcion:
        "Me encargo de que la tienda funcione y se vea increíble. Apasionado por el diseño funcional y el café ☕.",
      foto: tomi,
    }
    ,
    {
      nombre: "Uriel Berman",
      rol: "Gestión & Atención al cliente",
      descripcion:
        "Siempre lista para ayudarte. Me aseguro de que cada pedido llegue con una sonrisa 📦💬.",
        foto: berman,
      },
    {
      nombre: "Ian Jolodovsky",
      rol: "Logística & Inventario",
      descripcion:
        "Organizo el caos. Control del stock, envíos y todo lo que hace que los productos lleguen bien 📦📊.",
        foto: jolo,
      },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }, []);
  return (
    <div className="quienes-container">
      <h1 className="quienes-titulo">¿Quiénes somos?</h1>
      <p className="quienes-intro">
        Somos un equipo joven que creó <strong>TuiTui</strong> con la idea de
        ofrecer productos variados, útiles y únicos. Todo lo que ves acá lo
        elegimos y organizamos nosotros.
      </p>

      <div className="integrantes-grid">
        {integrantes.map((persona, i) => (
          <div className="integrante-card" key={i}>
            <img
              className="integrante-foto"
              src={persona.foto}
              alt={persona.nombre} />
            <h2>{persona.nombre}</h2>
            <h4>{persona.rol}</h4>
            <p>{persona.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
