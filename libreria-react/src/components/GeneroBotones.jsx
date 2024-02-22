import React, { useEffect, useState } from "react";
import { VerGeneros, BuscarPorGenero } from "../service/genero_service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const GeneroBotones = () => {
  const [listaGeneros, setListaGeneros] = useState(null);
  const [buscarGenero, setBuscarGenero] = useState(null);
  const [mostrarGeneros, setMostrarGeneros] = useState(false);

  useEffect(() => {
    const fetchListaGeneros = async () => {
      try {
        const response = await VerGeneros();
        setListaGeneros(response);
        console.log(response);
      } catch (error) {
        console.error("Error al obtener los géneros:", error);
      }
    };
    fetchListaGeneros();
  }, []);

  const handleClick = async (nombre) => {
    const response = await BuscarPorGenero(nombre);
    setBuscarGenero(response);
    console.log(response);
  };

  const handleVerGeneros = () => {
    setMostrarGeneros(!mostrarGeneros);
  };

  if (!listaGeneros) {
    return <p>cargando......</p>;
  }

  return (
    <div className="mt-5 list-group">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleVerGeneros}
          className="btn btn-primary"
          style={{ width: "250px", marginBottom: "85px", fontWeight: "bold" }}
        >
          {mostrarGeneros ? "Ocultar Géneros" : "Ver Géneros"}
        </button>
      </div>

      {mostrarGeneros && (
        <div
          style={{
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <table>
            <tbody>
              <tr>
                {listaGeneros.map((genero, index) => (
                  <td key={index} style={{ padding: "10px" }}>
                    {genero}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="carousel-container" style={{ marginTop: "85px" }}>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ height: "50px" }}
        >
          <div className="carousel-inner">
            {listaGeneros.map((generoData, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <h2
                  className="text-center"
                  style={{ fontWeight: "bold" }}
                  onClick={() => handleClick(generoData)}
                >
                  {generoData.toUpperCase()}
                </h2>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            style={{ backgroundColor: "red" }}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            style={{ backgroundColor: "green" }}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
      {buscarGenero !== null && buscarGenero.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <table
            style={{
              borderCollapse: "collapse",
              width: "80%",
              textAlign: "center",
              border: "1px solid #ddd",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Autor</th>
                <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Libro</th>
                <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Leído</th>
                <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Portada</th>
              </tr>
            </thead>
            <tbody>
              {buscarGenero.map((datos, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "15px" }}>{datos[1]}</td>
                  <td style={{ padding: "15px" }}>{datos[0]}</td>
                  <td style={{ padding: "15px" }}>
                    {datos[4] ? (
                      <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#63E6BE" }} size="lg" />
                    ) : (
                      <FontAwesomeIcon icon={faThumbsDown} style={{ color: "#fb0404" }} size="lg" />
                    )}
                  </td>
                  <td style={{ padding: "15px" }}>
                    <img src={`data:image/jpeg;base64,${datos[3]}`} alt="Portada" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        buscarGenero !== null && (
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
              color: "red",
              fontWeight: "bold",
            }}
          >
            No hay libros con este género.
          </h3>
        )
      )}
    </div>
  );
};

export default GeneroBotones;
