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
      rol: "Desarrollo",
      descripcion:
        "Me encargo de que la tienda funcione.",
      foto: tomi,
    }
    ,
    {
      nombre: "Uriel Berman",
      rol: "Gestión",
      descripcion:
        "Gestiono la experiencia de usuario",
      foto: berman,
    },
    {
      nombre: "Ian Jolodovsky",
      rol: "Logística",
      descripcion:
        "Organizo el caos.",
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
        Somos un equipo joven que creó <b>TuiTui</b> con la idea de
        ofrecer productos variados, útiles y únicos. Todo lo que ves acá lo
        elegimos y organizamos nosotros.
      </p>

      <div className="integrantes-grid">
        {integrantes.map((persona) => (
          <div className="integrante-card">
            <img className="integrante-foto" src={persona.foto} />
            <h2>{persona.nombre}</h2>
            <h4>{persona.rol}</h4>
            <p>{persona.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
