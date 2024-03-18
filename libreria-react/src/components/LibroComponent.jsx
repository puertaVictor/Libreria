import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { VerGeneros } from "../service/genero_service";
import "../css/LibroComponent.css";

const LibroComponent = ({ response }) => {
  const [listaGeneros, setListaGeneros] = useState([]);
  console.log(response)
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

  return (
    <div className="container">
      {response.map((libroData, index) => {
        let fecha = null;
        if (libroData[5] != null) {
          fecha = new Date(libroData[5]).toLocaleDateString();
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
          <div
            key={index}
            className="card mb-3"
            style={{ width: "100%", maxWidth: "700px", marginTop: "20px" }}  
          >
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "400px",
                    maxHeight: "450px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {libroData[6] ? (
                    <img
                      src={`data:image/jpeg;base64, ${libroData[6]}`}
                      alt={`Portada de ${libroData[0]}`}
                      className="img-fluid"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "grey",
                        border: "solid 1px black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      No disponible
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title mb-2 ">Título: {libroData[0]}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Autor: {libroData[2]}
                  </h6>
                  <p className="card-text mb-2 ">Leído: {leido}</p>
                  <p className="card-text mb-2 ">Fecha de lectura: {fecha}</p>
                  <p className="card-text mb-2 ">Resumen: {libroData[2]}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LibroComponent;
