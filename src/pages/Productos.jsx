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
  const [buscador, setBuscador] = useState("");
  const [totalProductos, setTotalProductos] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);

  const productosPorPagina = 20;
  const productosPorFila = 4;

  useEffect(() => {
    let endpoint = url;
    let params = { limit: productosPorPagina, skip: (paginaActual - 1) * productosPorPagina };

    if ((!idCategoria || idCategoria === "Todas") && buscador) {
      endpoint = `${url}/search`;
      params = { ...params, q: buscador };
    } else if (idCategoria && idCategoria !== "Todas") {
      endpoint = `${url}/category/${idCategoria}`;
    }

    axios.get(endpoint, { params })
      .then(response => {
        setProductos(response.data.products);
        setTotalProductos(response.data.total || response.data.products.length);
      })
      .catch(error => console.error("Error al cargar productos:", error));
  }, [idCategoria, buscador, paginaActual]);

  useEffect(() => {
    axios.get(`${url}/categories`)
      .then(response => setCategorias(response.data))
      .catch(error => console.error("Error al cargar categorias:", error));
  }, []);

  const handleChangeCategoria = (e) => {
    const nuevaCategoria = e.target.value;
    setPaginaActual(1);
    if (nuevaCategoria === "Todas") {
      navigate("/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/");
    } else {
      navigate(`/TP7EFSI_Berman_Jolodovsky_Goldberg/productos/${nuevaCategoria}`);
    }
  };

  const handleChangeBuscador = (e) => {
    setBuscador(e.target.value);
    setPaginaActual(1);
  };

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const totalPaginas = Math.ceil(totalProductos / productosPorPagina);

  const placeholders = productos.length > 0
    ? productosPorFila - (productos.length % productosPorFila || productosPorFila)
    : 0;

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
            <option value="Todas">Todas</option>
            {categorias.map(cat => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {(idCategoria === "Todas" || !idCategoria) && (
          <input
            className="buscador-input"
            value={buscador}
            onChange={handleChangeBuscador}
            placeholder="Buscar producto..."
          />
        )}
      </div>
      <div className="productos-container">
        {productos.length === 0 ? (
          <p className="no-result">No hay productos para mostrar.</p>
        ) : (
          <>
            {productos.map(producto => (
              <CardProducto key={producto.id} producto={producto} />
            ))}
            {Array.from({ length: placeholders }).map((_, idx) => (
              <div key={`placeholder-${idx}`} style={{ visibility: "hidden" }} />
            ))}
          </>
        )}
      </div>

      {totalPaginas > 1 && (
        <div className="paginacion">
          <button
            className="paginacion-btn"
            onClick={() => handlePaginaChange(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            Anterior
          </button>
          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i + 1}
              className={`paginacion-btn${paginaActual === i + 1 ? " active" : ""}`}
              onClick={() => handlePaginaChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="paginacion-btn"
            onClick={() => handlePaginaChange(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}