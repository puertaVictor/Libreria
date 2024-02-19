import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "../css/AutorComponent.css"; 

const AutorComponent = ({ response }) => {
  const [cardFlipped, setCardFlipped] = useState(Array(response.length).fill(false));

  const handleClick = (index) => {
    setCardFlipped(prevState => {
      const newCardFlipped = [...prevState];
      newCardFlipped[index] = !newCardFlipped[index];
      return newCardFlipped;
    });
  };

  const renderAutores = () => {
    return response.map((autorData, index) => {
      console.log(response)
      let imagenSrc = null;
      if (autorData[3]) {
        imagenSrc = `data:image/jpeg;base64, ${autorData[3]}`;
      }
      let fecha = null;
      if (autorData[5] != null) {
        fecha = new Date(autorData[5]).toLocaleDateString();
      }
      let leido = autorData[4] ? (
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
          <div key={index} className="col-md-6 text-center">
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <div
                className={`card mb-4 ${cardFlipped[index] ? "is-flipped" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div className="card-front">
                  <div className="card-body">
                    <h5 className="card-title">Titulo: {autorData[0]}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Autor: {autorData[2]}
                    </h6>
                    <p className="card-text">Leido: {leido}</p>
                    <p className="card-text">Fecha de lectura: {fecha}</p>
                    <div style={{ width: "200px", height: "250px", margin: "0 auto", overflow: "hidden" }} className="text-center">
                      {imagenSrc && (
                        <img
                          src={imagenSrc}
                          className="card-img-top img-fluid"
                          alt={`Foto de ${autorData[0]}`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      )}
                      {!imagenSrc && (
                        <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p className="card-text">Descripción:</p>
                    <p>{autorData[1]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Resultados de la búsqueda de autores:</h1>
      <div className="row">{renderAutores()}</div>
    </div>
  );
};

export default AutorComponent;

