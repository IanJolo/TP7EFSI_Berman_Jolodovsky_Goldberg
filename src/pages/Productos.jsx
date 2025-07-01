import axios from "axios";
import { useState, useEffect } from "react";
import CardProducto from "../components/CardProducto";
import './Productos.css';
import { useParams, useNavigate } from "react-router-dom";

export default function Productos() {
  const url = "https://dummyjson.com/products";
  const { idCategoria } = useParams();
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [buscador, setBuscador]=useState("");


  useEffect(() => {
    if (!idCategoria || idCategoria === "Todas") {
      axios.get(url)
        .then(response => setProductos(response.data.products))
        .catch(error => console.error("Error al cargar productos:", error));
    } else if(idCategoria!="Todas" && buscador=="") {
      axios.get(`${url}/category/${idCategoria}`)
        .then(response => setProductos(response.data.products))
        .catch(error => console.error("Error al cargar productos:", error));
    } else{
      axios.get(`${url}/search?q=${buscador}`)
        .then(response => setProductos(response.data.products))
        .catch(error => console.error("Error al cargar productos:", error)); 
    }
  }, [idCategoria, buscador]);


  useEffect(() => {
    console.log(idCategoria);
    axios.get(`${url}/categories`)
      .then(response => setCategorias(response.data))
      .catch(error => console.error("Error al cargar categorias:", error));
  }, []);

  const handleChangeCategoria = (e) => {
    const nuevaCategoria = e.target.value;
    if (nuevaCategoria === "Todas") {
      navigate("/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/");
    } else{
      navigate(`/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/${nuevaCategoria}`);
    } 
  };
  const handleChangeBuscador=(e)=>{
    let texto=e.target.value;
    setBuscador(texto);
  }

  return (
    <div className="productos-main-bg">
      <div className="productos-header">
        <h1>Catálogo de Productos</h1>
        <div className="filtros">
          <select
            className="filtro-select"
            value={idCategoria || "Todas"}
            onChange={handleChangeCategoria}
          >
            <option value="Todas" onChange={handleChangeCategoria}>Todas</option>
            {categorias.map(cat => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <input value={buscador} onChange={handleChangeBuscador} />
      </div>
      <div className="productos-container">
        {productos.length === 0 ? (
          <p className="no-result">No hay productos para mostrar.</p>
        ) : (
          productos.map(producto => (
            <CardProducto key={producto.id} producto={producto} />
          ))
        )}
      </div>
    </div>
  );
}
