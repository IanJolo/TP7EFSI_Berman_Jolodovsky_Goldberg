import React, { useEffect, useState } from 'react';
import './CarruselDestacados.css';
import ipad from "./../assets/ipadpro.jpg"
import iphone from "./../assets/iphone14.png"
import mac from "./../assets/macbook.jpg"
import watch from "./../assets/applewatch.jpg"
const destacados = [
  {
    id: 1,
    titulo: "iPhone 14 Pro",
    descripcion: "Exclusivo desde nuestro sitio con 20% de descuento.",
    imagen: iphone,
  },
  {
    id: 2,
    titulo: "iPad Pro M2",
    descripcion: "Poder y creatividad en tus manos. Solo desde nuestro sitio.",
    imagen: ipad,
  },
  {
    id: 3,
    titulo: "MacBook Air M2",
    descripcion: "Ligera, veloz, con precio especial en nuestro sitio.",
    imagen: mac,
  },
  {
    id: 4,
    titulo: "Apple Watch Series 9",
    descripcion: "Estilo y salud con acceso anticipado desde nuestro sitio.",
    imagen: watch,
  },
];

export default function CarruselDestacados() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % destacados.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="carrusel-destacados">
      <div className="carrusel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {destacados.map((item) => (
          <div key={item.id} className="slide">
            <img src={item.imagen} className="slide-img" />
            <div className="slide-info">
              <h2>{item.titulo}</h2>
              <p>{item.descripcion}</p>
                <a href="https://www.apple.com" target="_blank" className="ver-boton" >Ver ahora </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
