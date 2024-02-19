import React, { useState, useEffect } from "react";
import { LibroAleatorio } from "../service/libro_service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "../css/Inicio.css"; 
const PaginaInicio = () => {
  const [libroAleatorio, setLibroAleatorio] = useState(null);
  useEffect(() => {
    const fetchLibroAleatorio = async () => {
      try {
        const response = await LibroAleatorio();
        setLibroAleatorio(response);
      } catch (error) {
        console.error("Error al obtener el libro aleatorio:", error);
      }
    };

    fetchLibroAleatorio();
  }, []);

  const renderLibroAleatorio = () => {
    if (!libroAleatorio) {
      return <p>Cargando...</p>;
    }
  
    return libroAleatorio.map((libroData, index) => {

      let imgPortada = null;
      if (libroData[3]) {
        imgPortada = `data:image/jpeg;base64, ${libroData[3]}`;
      }
      let leido = libroData[4] ? (
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{ color: "#63E6BE" }}
          size="lg"
        />
      ) : (
        <FontAwesomeIcon
          icon={faThumbsDown}
          style={{ color: "#fb0404" }}
          size="lg"
        />
      );
      return (
        <div key={index} className="row justify-content-center mt-5">
          <div className="card mb-3 border-0" style={{ maxWidth: "900px" }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                {imgPortada && (
                  <img
                    key={`img-${index}`}
                    src={imgPortada}
                    className="img-fluid rounded-start"
                    alt={`Foto de ${libroData[0]}`}
                  />
                )}
              </div>
              <div className="col-md-8">
                <div className="card-body text-center">
                  <h5 className="card-title">Titulo: {libroData[0]}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Autor: {libroData[6]}
                  </h6>
                  <p className="card-text">Genero: {libroData[5]}</p>
                  <div>
                    <p style={{ color: "blue", fontWeight: "bold" }}>Descripción:</p>
                    <p className="card-text">{libroData[2]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
    <h1 className="libro row justify-content-center mt-3">RECOMENDACIÓN DEL DÍA</h1>
    <div className="mt-5">{renderLibroAleatorio()}</div>
    </div>
  );
};

export default PaginaInicio;
