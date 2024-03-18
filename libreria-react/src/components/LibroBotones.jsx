import React, { useEffect, useState } from "react";
import { SacarPortadas } from "../service/libro_service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const LibroBotones = () => {
    const [listaLibros, setListaLibros] = useState(null);

    useEffect(() => {
        const fetchListaLibros = async () => {
          try {
            const response = await SacarPortadas();
            setListaLibros(response);
            console.log(response);
          } catch (error) {
            console.error("Error al obtener los géneros:", error);
          }
        };
        fetchListaLibros();
      }, []);

      const renderLibrosBotones = () => {
        if (listaLibros === null) {
          return <div>Cargando...</div>; 
        }
        return (
          <div className="row">
            {listaLibros.map((libroData, index) => {
              let imagenSrc = null;
              if (libroData[0]) {
                imagenSrc = `data:image/jpeg;base64, ${libroData[0]}`;
              }
              let leido = libroData[2] ? (
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
              let tituloLibro = libroData[1];
              let genero = libroData[3];
              return (
                <div key={index} className="col-md-3 text-center mb-4" style={{ marginTop: "50px" }}>
                  <div style={{ width: "450px", height: "300px", margin: "0 auto", overflow: "hidden" }} className="text-center">
                    <h3 className="card-text">{tituloLibro}</h3>
                    {imagenSrc ? (
                      <img
                        src={imagenSrc}
                        className="card-img-top img-fluid"
                        alt={`Foto de ${libroData[0]}`}
                        style={{ width: "75%", height: "80%", objectFit: "contain", marginTop: "20px" }}
                      />
                    ) : (
                      <div style={{ marginLeft: "120px", width: "50%", height: "80%", textAlign:"center", alignItems:"center",  marginTop: "20px",backgroundColor: "grey" }}><p>No existe foto</p></div>
                    )}
                  </div>
                  <p className="card-text">Género:  {genero}</p>
                  <p className="card-text" style={{marginTop:"25px"}}>Leido:  {leido}</p>
                </div>
              );
            })}
          </div>
        );
      };
      
  return (
    <div>{renderLibrosBotones()}</div>
  )
}

export default LibroBotones;
