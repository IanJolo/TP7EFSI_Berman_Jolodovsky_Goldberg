// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__logo">
          {/* Pon tu ícono o imagen aquí si lo necesitas */}
          <span>TuiTui</span>
        </span>
        <p className="footer__copy">
          © {year} TuiTui – Todos los derechos reservados
        </p>
      </div>


    </footer>
  );
}
