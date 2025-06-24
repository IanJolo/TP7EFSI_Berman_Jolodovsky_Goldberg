import axios from "axios";
import { useState, useEffect } from "react";
import CardProducto from "../components/CardProducto";
import './Productos.css'

export default function Productos() {
  const url = "https://dummyjson.com/products";
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setProductos(response.data.products);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  return (
    <div className="productos-container">
  {productos.map(producto => (
    <CardProducto key={producto.id} producto={producto} />
  ))}
</div>

  );
}
