import React, { useEffect, useState } from "react";
import { VerGeneros , BuscarPorGenero } from "../service/genero_service";

const GeneroBotones = () => {
  const [listaGeneros, setListaGeneros] = useState(null);
  const [buscarGenero, setBuscarGenero] = useState(null);

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
    setBuscarGenero(response)
    console.log(response)
  }

  if (!listaGeneros) {
    return <p>cargando......</p>;
  }
  return (
    <div className="mt-5 list-group">
      <h1
        className="text-center"
        style={{ color: "red", marginBottom: "250px" }}
      >
        Lista de géneros
      </h1>
      <div className="carousel-container">
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
      <h2 className="text-center" style={{ fontWeight: 'bold' }} onClick={() => handleClick(generoData)}>{generoData.toUpperCase()}</h2>
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            style={{ backgroundColor: "green" }}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneroBotones;
